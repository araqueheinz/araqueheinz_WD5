// ----------------- START LINE index.js ----------------- //

// ----------------- INSTALL MONGOOSE ----------------- //

/*
   
    1. In terminal or command line in your folder type:
        npm install --save mongoose

    2. We require mongoose in our project
    
*/

// ----------------- INSTALL COOKIE-SESSION ----------------- //

/*
   
    1. In terminal or command line in your folder type:
        npm install --save cookie-session

      2. We require cookie in our project
    
*/

//Import express to handle and keep track of our server
const express = require('express');
//Import Mongoose to handle MongoDb
const mongoose = require('mongoose');
//Import cookie session
const cookieSession = require('cookie-session');
//Import passport to keep track of user session
const passport = require('passport');
//Import the keys.js --> Client Id, Client Secret & mongoURI
const keys = require('./config/keys.js');
//Import Users.js to handle collections in MongoDb
require('./models/User');
//Import passport to handle Google OAuth
require('./services/passport');

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

// ----------------- 1. GO TO User.js ----------------- //


// ----------------- 3 - 3 COMING FROM passport.js ----------------- //

const app = express();

app.use(
    cookieSession({
        /*
            maxAge is a property of cookieSession
            and it will set how long the cookie will be alive 
            or automatically expired
            sadly it works in milliseconds like php

            expires in 30 days.

            key to encrypt our cookie: we don't want to commit this to git, so
            we will put that key in our config keys.js
            it has to be in an array 
         */
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

/*

Immediately calls the function that we just required and 
passed the app as an argument;

*/
require('./routes/authRoutes')(app);

// ----------------- 4. GO TO authRoutes.js  ----------------- //



const PORT = process.env.PORT || 5000;
app.listen(PORT);


