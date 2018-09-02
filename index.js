// ----------------- INSTALL MONGOOSE ----------------- //

/*
   
    1. In terminal or command line in your folder type:
        npm install --save mongoose

    2. We require mongoose in our project
    
*/

//Import express to handle our server
const express = require('express');
//Mongoose import to handle MongoDb
const mongoose = require('mongoose');
//Import the keys.js --> Client Id, Client Secret & mongoURI
const keys = require('./config/keys.js');
//Import passport to handle Google OAuth
require('./services/passport');
//Import Users.js to handle collections in MongoDb
require('./models/User');

/*
   We are going to instruct mongoose to attempt to 
   connect to that copy of mongodb that we just provisioned

   We want to connect using a driver via the standard MongoDB URI:
       mongodb://<dbus blah blah we don't want to share with git hub
        or the world! so we are going to take it to the config folder
        in the keys.js file.

    CHECK keys.js DISSECTING THE MONGO URI for further explanation!
    pass that keys.mongoURI to mongoose.connect()

    (node:68405) DeprecationWarning: current URL string parser is deprecated, 
    and will be removed in a future version. To use the new parser, pass option
    { useNewUrlParser: true } to MongoClient.connect.

*/

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});


const app = express();

/*

Immediately calls the function that we just required and 
passed the app as an argument;

*/
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
