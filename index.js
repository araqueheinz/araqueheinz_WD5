 // ----------------- Section 3 Lecture 15^ ----------------- //

//Install passport

/*
    1. In terminal or command line in your folder type:
        npm install --save passport 
        this is the generic set of helpers that work well with express

        and we are going to install one strategy that will help us work 
        with google OAuth

        npm install --save passport passport-google-oauth20 
        why 20? https://github.com/jaredhanson/passport-google-oauth#readme
        This is a meta-module that combines passport-google-oauth1 
        and passport-google-oauth20. It exists for backwards-compatibility 
        with applications making use of the combined package.

        https://github.com/jaredhanson/passport-google-oauth2

*/

const express = require('express');
//import or bring passport into the file
const passport = require('passport');
//Import the google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

const keys = require('./config/keys.js');

/*
    we are going to pass 2 parameters:
        1.  An Object with the client ID, 
            Client secret and the url that
            the user is going to be sent after
            they come back from the google server
        2. 
*/
passport.use(new GoogleStrategy({

        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'

    }, (accesToken)=>{
        
        console.log(accesToken);
    })
);

/*
    new GoogleStrategy() creates a new instance of Google passport Strategy
    passport.use takes the specific strategy we are going to use to validate the user
    
    https://console.developers.google.com/apis/dashboard

    1. create a new project

    2. click on enable apis and services

    3. search for : google+ 
        - Google+ API

    4. Click on it 

    5. Click on enable on the top

    6. Click on Credentials on the left

    7. Create credentials,  OAuth client ID

    8. Click on configure consent screen

    9. Product name shown to users

    10. save

    11. select the application type we are trying to create

    12. fill the authorize vs origin
        - http://localhost:5000

    13. authorize redirect URIs
        - http://localhost:5000/*

    14. click create.

    Here is your client ID:
    
    Here is your client secret:
     

 */

 // ----------------- Section 3 Lecture 21^ ----------------- //

/*
    Client Id: It is a public token, It is completely ok for everyone to see
        all it does is identify us to the google servers

    Client secret: Private token we don't want to share to anyone else!
        
 */

         // --------- STORE CS Securely ---------//




const PORT = process.env.PORT || 5000;
app.listen(PORT);
