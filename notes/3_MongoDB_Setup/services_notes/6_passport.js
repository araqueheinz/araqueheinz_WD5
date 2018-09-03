// ----------------- 2 - 2 COMING FROM User.js ----------------- //

//Imports passport library 
const passport = require('passport');
//Imports passport strategy to deal specifically with google OAuth
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Import the keys.js --> Client Id, Client Secret & mongoURI
const keys = require('../config/keys.js');
//Import mongoose library 
const mongoose = require('mongoose');

/*
    We are attempting to fetch the user collection out of mongoose
    When using mongoose.model:

    1 argument means we're trying to get something out of mongoose
    2 arguments means we're trying to load something into it
*/
const User = mongoose.model('users');

/*
    We are going to generate that token that's going to be passed
    around every time the user makes a new request while logged in

    We are going to pass an arrow function with 2 arguments

    ------- The 1st argument -------
        Is going to be the user the same as this
        done(null,  existingUser); and 
        .then(user => done(null, user))

        is whatever we pulled out of the database 2 seconds ago

    ------- The 2nd argument -------
        is going to be the done callback we used two seconds ago
        
*/
passport.serializeUser((user, done)=>{

    /*
        ------- The 1st argument -------
        error object, we don't expect any errors so we 
        just set it to null

        ------- The 2nd argument -------
        identifying peace of information that we are going to use
        it is called user.id --> this is not the profile ID

        it is the id given by mongo db:
            _id": {
            "$oid": "5b8be3733fa4561875707028"
     */
    done(null, user.id);

});

/*
    In the serializeUser process we turned the moongose model into
    an id.

    Now We are going to take the id that we had previously 
    stuffed in a cookie and turn it back into and actual
    user model.

    We are going to pass an arrow function with 2 arguments
    
    ------- The 1st argument -------
       Is the exact token that we had previously
       stuffed into a cookie:
       id   just id

    ------- The 2nd argument -------
       is the done function that we have to call after we
       have successfully turned the id back into a user
    

    we are going to turn an id into a model class instance
    search in our big collection and find a particular id    
*/
passport.deserializeUser((id, done )=>{
    //Mongoose function 
    //It is an asynchronous function so we assume it will return a promise 
    User.findById(id)
    .then(user =>{
        done(null, user);
    })
})

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

// ----------------- 3. GO TO index.js ----------------- //

// ----------------- 5 - 5 COMING FROM authRoutes.js ----------------- //

/*

    This is the callback function that runs every time the user 
    is redirected from the google flow.
    
    Inside of the callback function we are going to use our model 
    class to create an instance of a user.
    
*/
    (accessToken, refreshToken, profile, done) => {
        
// console.log('Access Token: ', accessToken);
// console.log('Refresh Token: ', refreshToken);
// console.log('Profile: ', profile);

/*

        new User({ googleId: profile.id})
    we are givin our new user the profile id 

    REMEMBER in User.js we made an schema

        const userSchema = new Schema({
        googleId: String

        });

    This schema contains the only property we care about at this moment 
    which is: googleId: String
    Thats what we are setting right now!
    AND SAVE

    We are going to check if the google id already exists in our mongodb

*/
        //This returns a promise!
        //JS 2017
        User.findOne({googleId: profile.id})
        .then((existingUser)=>{
            //We are going to make use of the done argument to finish this process.
            if(existingUser) { 
                //Already have a record with the given profile id

                /*
                    ------- The 1st argument -------
                     is going to be an error object 
                     case 1 everything went fine no error perfect lets move on

                    ------- The 2nd argument -------
                      is going to be the user record
                      
                */
                done(null,  existingUser);

            } else {
                //No record with this id
                //This create a mongoose model instance which means 1 record 
                //inside the collection
                new User({ googleId: profile.id}).save()
                .then(user => done(null, user))
                //we need to be extra sure that the user is saved
            }

        }) 


        //
    })
);