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

const PORT = process.env.PORT || 5000;

app.listen(PORT);


