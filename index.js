
const express = require('express');
//import or bring passport into the file
const passport = require('passport');
//Import the google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys.js');

const app = express();

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

app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
