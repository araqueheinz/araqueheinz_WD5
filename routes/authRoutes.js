//Imports passport library 
const passport = require('passport');

/*

Export the function that we will use to send a 
HTTP request to the google servers and then get 
a callback with all the user's profile and email
information.

*/
module.exports = app =>{

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'))
};