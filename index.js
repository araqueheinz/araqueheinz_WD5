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


const PORT = process.env.PORT || 5000;
app.listen(PORT);
