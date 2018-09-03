// ----------------- 4 - 4COMING index.js  ----------------- //
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

    // ----------------- 5. GO TO passport.js ----------------- //

    /*
        Whenever a user who is already authenticated makes a request 
        to the route '/api/logout/'

        ------- The 1st argument -------
            we will give it the route '/api/current_user' 
            (we can define routes that are called whatever we want)
     
         ------- The 2nd argument -------
             will be an arrow function with 2 arguments 
             1. the request and 
             2 the response objects 
    
    
    */
   app.get('/api/logout', (req, res)=>{
       /*
            when we run this function it takes that cookie that contains
            the user id and it kills the Id that's in there
            you no longer have any IDs and I have no ide who that user is

            we will send back res.send(req.user) this is proof to the user 
            that they're no longer sign in.

             In the browser after you log in if you go to /api/current_user
            you will see:
            {"_id":"5b8d5a4d6b64822ad7dc1509","googleId":"102649032765113533147","__v":0}

            when you go to /api/logout the browser will be blank
            if you go to /api/current_user the browser will be blank
            because when you log out passport killed the cookie that identified 
            the user

       */
    req.logout();
    res.send(req.user)

   })

    /*
        We re going to add a 3rd route handler. 
        For whenever someone makes a get request
        to our app

         ------- The 1st argument -------
            we will give it the route /api/current_user
            (we can define routes that are called whatever we want)
     
         ------- The 2nd argument -------
             will be an arrow function with 2 arguments 
             1. the request and 
             2 the response objects 
    
    */
    app.get('/api/current_user', (req, res) =>{
        /*
            We are going to immediately send back the user information
            after they log in and they go to the /api/current_user'

            In the browser after you log in if you go to /api/current_user
            you will see:
            {"_id":"5b8d5a4d6b64822ad7dc1509","googleId":"102649032765113533147","__v":0}

            when you go to /api/logout the browser will be blank
            if you go to /api/current_user the browser will be blank
            because when you log out passport killed the cookie that identified 
            the user

        */
        res.send(req.user);
    })


};