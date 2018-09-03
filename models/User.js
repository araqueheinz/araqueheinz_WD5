const mongoose = require = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String

});

mongoose.model('users', userSchema);

