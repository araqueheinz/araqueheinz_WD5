// ----------------- INSTALL PASSPORT ----------------- //

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

// --------- INSTALL NODEMON AND CONFIG ---------//

/*
    In the server folder terminal run command:
        npm install --save nodemon

    In package.json file in the script section add a property:
    "dev": "nodemon index.js"

    It will look like this:

        "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
        }
    
    This will help us to automate the restarting of the 
    server without us having to write in terminal node index.js

    In the server folder terminal run command:
        npm run dev

*/

const express = require('express');
//import or bring passport into the file
const passport = require('passport');
//Import the google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys.js');

const app = express();


// ----------------- GET CLIENT ID & CLIENT SECRET GOOGLE OAUTH ----------------- //

/*
    
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

    Client Id: It is a public token, It is completely ok for everyone to see
        all it does is identify us to the google servers

    Client secret: Private token we don't want to share to anyone else!
        
*/

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

passport.use(new GoogleStrategy({

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'

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

    (accessToken, refreshToken, profile, done) => {
        
        console.log('Access Token: ', accessToken);
        console.log('Refresh Token: ', refreshToken);
        console.log('Profile: ', profile);
    })
);

// --------- SINGLE ROUTE HANDLER  ---------//

/*
        WE ARE GOING TO ADD A SINGLE ROUTE HANDLER 
    We reference the express app object 
    We state the type or method of the request that we want to handle here
        in this case we want to handle a get type HTTP request
        
    ------- The first argument ------- 
    Is the path that we want to handle:
        '/auth/google'

    -------  The second argument ------- 
    Is some code to be executed whenever the request comes into his route: 
        () =>{}

        in this case we are going to use passport.authenticate()
*/

// --------- passport.authenticate() ---------//

/*
    app.get('/auth/google', passport.authenticate('google'
        we are asking passport to authenticate the user
        who is coming in on this route '/auth/google' and
        use the strategy called ('google', 

        Internally google strategy has some little bit of code
        that says I'm known as 'google'

    ------- The first argument -------
    Its going to be google as a string because we want
    passport to know we want to use google strategy to
    handle the google authentication, example:

        'google' 
    
    -------  The second argument -------
    it is going to be an object with a property called:
    scope with an array ['profile', 'email']

    The scope specifies to google servers what access
    we want to have inside this user's profile

    In other words we are asking google to give us access
    to the user's ['profile', 'email'] information.

    'profile', 'email' this two are not randomly made up
    google has a list of the different scopes or permissions
    that we can ask for the user's account

*/

app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// --------- QUICK TEST #1 ---------//

/*
    In the server folder terminal run command:
        node index.js

    In the browser type:
        localhost:5000//auth/google

    We are going to receive an error but t is fine!   
        400. That’s an error.

        Error: redirect_uri_mismatch

    But we successfully got redirected to google:

        https://accounts.google.com/o/oauth2/v2/auth?respon blah blah blah 

    It is important that in your google API manager, you set the 
    Authorized redirect URI to... in this case:

        http://localhost:5000/auth/google/callback

    Once you set that up is going to prompt you to select a Gmail
    when you select is going to sent you back this message:

        Cannot GET /auth/google/callback

    The Reason being that we haven't set a route that handles that direction yet

 */

// --------- ADD A SECOND ROUTE HANDLER ---------//

/*
    We re going to create a route handler to handle the case
    in which the user visits google/callback

    instead of writing a function for our second argument we are going
    to leave all the work to passport
*/

app.get('/auth/google/callback', passport.authenticate('google'))

/*
    app.get('/auth/google/callback', passport.authenticate('google') )

     In this case passport is going to see a special code that has been sent 
     back from google servers that is in the url 

     this time we are attempting to turn that code into an actual profile

     passport.authenticate('google') is going to see that we didn't pass a second argument
     and handle it a little bit differently

*/

const PORT = process.env.PORT || 5000;
app.listen(PORT);

