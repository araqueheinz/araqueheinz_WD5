const mongoose = require('mongoose');

const { Schema } = mongoose;

const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    
  title: String,
  body: String,
  subject: String,

  //We are going to embed a sub document collection in the survey schema
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },

  /*
    Make mongo understand that this is going to be a reference
    to a very particular user

    With the following line of code we add the idea 
    to surveySchema that every survey belongs to a particular
    user.

    convention is _user because is supposed to be a relationship field
  */
  _user: { type: Schema.Types.ObjectId, ref: 'User' },

  //Provide more features to our users
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);