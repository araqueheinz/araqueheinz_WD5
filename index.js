//TO RUN THE APP IN TERMINAL WRITE: node index.js


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
    res.send({Portfolio: "WD5_Test"});
});

//app.listen(5000);
//http://localhost:5000
//TO RUN THE APP IN TERMINAL WRITE: node index.js

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
//TO RUN THE APP IN TERMINAL WRITE: node index.js

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


// ----------------- Section 2 Lecture 13^ ----------------- //

// 1. create a heroku account

// 2. set your git at your folder 

// 3. install heroku using terminal

// 4. In terminal in your folder type: heroku login
//      verify credentials

/*

    5.  In terminal or command line in your folder type: heroku create

        Creating app... done, ⬢ stormy-headland-31614
        https://stormy-headland-31614.herokuapp.com/ | https://git.heroku.com/stormy-headland-31614.git

        - https://stormy-headland-31614.herokuapp.com/ 
            this link, identifies the name of the application to heroku

        - https://git.heroku.com/stormy-headland-31614.git
            this link, is our deployment target

*/

/*
    6. In terminal or command line in your folder type:
        git remote add heroku https://git.heroku.com/stormy-headland-31614.git

    this says add a remote repository to our current repository inside our server directory
    we want to name that remote repo as heroku and this is the address 
    of that remote repo: https://git.heroku.com/stormy-headland-31614.git

    ➜  server git:(master) ✗ git remote add heroku https://git.heroku.com/stormy-headland-31614.git
        fatal: remote heroku already exists.(this is totally fine)
*/

/*
    7. In terminal or command line in your folder type:
        git push heroku master
*/

/*
    8. test out our application
    In terminal or command line in your folder type:
    heroku open
 
 */

 /*
    9. (OPTIONAL is it is not working)
    In terminal or command line in your folder type:
    heroku logs

    hopefully it will give you an idea of what went wrong!
 */

 // ----------------- Section 2 Lecture 15^ ----------------- //
 /*
        THIS IS WHAT YOU DO IN THE FUTURE TO RE DEPLOY YOUR APPLICATION

        when you make changes add and commit your changes.
        In terminal or command line in your folder type:
        git add .
        git commit -m "changed index.js"
        git push heroku master

        then heroku open

 */