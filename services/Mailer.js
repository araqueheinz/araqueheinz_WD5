const sendgrid = require('sendgrid');

const helper = sendgrid.mail;

const keys = require('../config/keys');

class Mailer extends helper.Mail {

      //destructuring subject and recipient from surveys
  constructor({ subject, recipients }, content) {
      //We do it this way because that's how sendgrid wants us to do it
    
    super();

    //Properties that mailer needs to work properly 

    //sg is short for sendgrid
    this.sgApi = sendgrid(keys.sendGridKey);

    this.from_email = new helper.Email('do-not-reply-fool@wd5.com');
    
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    //addContent is a built in function from mailer(sendgrid) 
    this.addContent(this.body);

    //this is a helper(sendgrid)  function that we are going to define
    this.addClickTracking();

    //Another helper(sendgrid) function that we are going to define
    this.addRecipients();

  }

  formatAddresses(recipients) {
    //is an object and we just need the email property
    return recipients.map(({ email }) => {
        //we format it with the email helper
      return new helper.Email(email);

    });
  }

  addClickTracking() {
    //this is sendgrid code implementation the documentation doesn't give 
    //further explanation on the topic.
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);

  }

  addRecipients() {

    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {

      personalize.addTo(recipient);

    });

    this.addPersonalization(personalize);
  }

  //Async code
  async send() {

    const request = this.sgApi.emptyRequest({

      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()

    });

    //API is a function from the sendgrid API
    const response = await this.sgApi.API(request);

    return response;

  }
}

module.exports = Mailer;