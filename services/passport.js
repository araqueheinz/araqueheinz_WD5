//Imports passport library 
const passport = require('passport');
//Imports passport strategy to deal specifically with google OAuth
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Import the keys.js --> Client Id, Client Secret & mongoURI
const keys = require('../config/keys.js');

/*

    passport method that we used to be able to use the Google OAuth
    Strategy. It will create a new Object of the google Google OAuth
    Strategy that using the Client Id and Client Secret will retrieve 
    the info we need and the provide the google server with our authorized 
    callback URI

 */
passport.use(new GoogleStrategy({

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'

    },    
    (accessToken, refreshToken, profile, done) => {
        
        console.log('Access Token: ', accessToken);
        console.log('Refresh Token: ', refreshToken);
        console.log('Profile: ', profile);
    })
);