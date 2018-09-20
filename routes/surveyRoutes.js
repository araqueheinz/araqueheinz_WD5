const _ = require('lodash');

const Path = require('path-parser');

const { URL } = require('url');

const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const requireCredits = require('../middlewares/requireCredits');

const Mailer = require('../services/Mailer');

const surveyTemplate = require('../services/emailTemplates/surveyTemplate');


const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false
    });

    res.send(surveys);
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('We appreciate your feedback Fool!');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    
    const p = new Path('/api/surveys/:surveyId/:choice');

    /*

    //Destructuring 
    const events = _.map(req.body, ({email, url})=>{

      //we are going to create e parser object
      //to let the library that we want to extract
      //the path from the url we use :

      const match = p.test(new URL(url).pathname);
      if(match){
        //destructuring 
        return { email, surveyId: match.surveyId, choice: match.choice };
      }

    })
       //compact function from lodash iterates through an array and gets rid of the undefined

    const compactEvents = _.compact(events);
    //this code will help set ability of the user to vote on different surveys, but no the same one
    const uniqueEvents =  _.uniqBy(compactEvents, 'email', 'surveyId');
    
    */

    //Refactoring
    //lodash capability to chain functions 
    _.chain(req.body)
    .map(({ email, url }) => {

      const match = p.test(new URL(url).pathname);

      if (match) {
          //destructuring 
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
    //destructuring from events
    .each(({ surveyId, email, choice }) => {
      //Look at the survey collection, find and updated a record inside that collection
      Survey.updateOne({
          //we want to find the survey with this given id In mongodb id is _id
          _id: surveyId,
          //who has a recipient 
          recipients: {
            //with a given email and has not yet responded to the survey
            $elemMatch: { email: email, responded: false }
          }
        },
        //after this singular subject has been found make this following update
        {
          //increment the choice "yes or no" to 1
          $inc: { [choice]: 1 },
          //update the given the recipient who we just have found in the original query "$"
          $set: { 'recipients.$.responded': true }, //update the responded property to true
          ///update the lastResponded property and add the new Data
          lastResponded: new Date()
        }
        //this executes all the code that we put together
      ).exec();
    })
    .value();

  res.send({});
  });

  /*
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => { return { email: email }}),
        _user: req.user.id,
        dateSent: Date.now()
        });

*/
  //REFACTOR
  
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()
    });

   

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      //This is where we sent the email out
      await mailer.send();
      //save the survey for later review
      await survey.save();
      //deduct the credits from the user
      req.user.credits -= 1;

      //save that user in a const variable 
      const user = await req.user.save();

      //send back that same user model
      res.send(user);
      
    } catch (err) {
      res.status(422).send(err);
    }
  });
};