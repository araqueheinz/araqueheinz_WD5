const express = require('express');
require('./services/passport');

const app = express();

//Immediately calls the function that we just required and passed the app as an argument;
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
