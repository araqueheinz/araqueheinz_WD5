/*
Import express library by writing the command...
We are going to be using common JS modules
Node js runtime only has support for common JS modules
Common modules is a system implemented by NODE JS for requiring
or sharing code between different files
*/

const express = require('express'); //JS modules

/*
import express from 'express' --> makes use of a different
module system called ES 2015 modules NODE JS DID NOT HAVE 
support for this system 
*/

//We will now create our first express app
const app = express();


/*
        - App: the app object represents the underlying running express server.
    express app to register this route handler with

        - Get: watch incoming requests with this method.
    getting information.

        - '/': watch for request trying to access '/'.
      
        - req: request. Object representing incoming request.

        - res: response. Object representing the outgoing response.

        - res.send({hi: 'there'}): Immediately send some JSON back to who
    ever made this request.

*/
app.get('/', (req, res)=>{
    res.send({hi: 'there'});
});

//app.listen(5000);
//http://localhost:5000

// ----------------- Section 2 Lecture 12 ----------------- //

/*
 Cloud Computing, Application Services

    - https://www.heroku.com
    - https://aws.amazon.com
    - https://www.digitalocean.com
*/

// 1. /////////////////////////////////// DYNAMIC PORT BINDING

    /*
    when heroku runs our application 
    it has the ability to inject what 
    are called environment variables (env).

    process.env.PORT \\ 5000: look at the 
    underlying environment and see if they 
    have declares a port for us to use 
    OR default to 5000
    */

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// 2. /////////////////////////////////// SPECIFY NODE ENVIRONMENT

/*
    Tell heroku to use a very specific version of node.js

    Open package.json

    and between main and scripts add:

        "engines": {
            "node": "8.1.1",
            "npm" : "5.0.3"
        }

*/

// 3. /////////////////////////////////// SPECIFY START SCRIPT

/*
    Tell heroku what command to run to start our server

    Open package.json

    and delete whats inside the scripts and write:

        "scripts": {
            "start": "node index.js"
        },

*/

// 4. /////////////////////////////////// CREATE .gitignore FILE

/*
    Create a .gitignore file to write what data type is 
    going to be ignored when pushing to the repo

    Open the file using git bash (OPTIONAL $ code .gitignore)
    and write the next data:

        node_modules

*/




