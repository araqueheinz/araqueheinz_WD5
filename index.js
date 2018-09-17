//Import express to handle and keep track of our server
const express = require('express');

//Import Mongoose to handle MongoDb
const mongoose = require('mongoose');

//Import cookie session to handle tokens from google OAuth
const cookieSession = require('cookie-session');

//Import passport to keep track of user session
const passport = require('passport');

//Import parser to parse data that comes from the strip API
const bodyParser = require('body-parser');

//Import the keys.js --> Client Id, Client Secret & mongoURI
const keys = require('./config/keys');

//Import Users.js to handle collections in MongoDb
require('./models/User');

//Import Survey.js to handle each users' survey inside MongoDb
require('./models/Survey')

//Import passport to handle Google OAuth
require('./services/passport');



mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
     
        maxAge: 30 * 24 * 60 * 60 * 1000,

        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());

app.use(passport.session());

require('./routes/authRoutes')(app);

require('./routes/billingRoutes')(app);

require('./routes/surveyRoutes')(app);

/*
    We are going to add some configuration to make sure that express
    behaves correctly when it is in the production environment. 

    only runs whe it is at production
*/

if (process.env.NODE_ENV === 'production') {
/*
    Making sure that express will serve up 
    production assets like our main.js file,
    or main.css file!
    
*/
    app.use(express.static('client/build'));

/*
    Express will serve up the index.html file
    if it doesn't recognize the route

*/  
    const path = require('path');
    app.get('*', (req, res) => {
/*
        Inside the client/build is a index.html
*/
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const PORT = process.env.PORT || 5000;

app.listen(PORT);


