//import or bring passport into the file
const passport = require('passport');
//Import the google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});


// --------- STORE CLIENT ID & CLIENT SECRET SECURELY  ---------//

/*
    Create a different folder & JS file in it
    Create a:
    module.exports object and store your keys in it example:

        module.exports = {
        googleClientID: 'blah blah blaha',
        googleClientSecret: 'blah blah blaha'
        }

    in the .gitignore file write under node_modules
    the name of the file you want git to ignore example:

    node_modules
    keys.js
*/


/*
    new GoogleStrategy() creates a new instance of Google passport Strategy
    passport.use takes the specific strategy we are going to use to validate the user

*/

/*
    we are going to pass 2 arguments
        1.  An Object with the client ID, 
            Client secret and the url that
            the user is going to be sent after
            they come back from the google server

        2.  Is the function that receives all the 
            user's information that then we are going to
            use as we see fit
*/


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },

    /*
    ------- The 1st argument -------
    Access Token:  gives you a special code 
     
    ------- The 2nd argument -------
    Refresh Token:  undefined

    ------- The 3rd argument -------
    Profile:  { id: '1167844998',
    displayName: 'Heinz Araque',
    name: { familyName: 'Araque', givenName: 'Heinz' }, etc etc

    ------- The 4th argument -------
*/

    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);