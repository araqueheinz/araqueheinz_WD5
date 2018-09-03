// ----------------- 1 - 1 COMING FROM index.js ----------------- //

const mongoose = require = require('mongoose');

/*

    const Schema = mongoose.Schema;
        destructuring 
    const { Schema } = mongoose;

    This two lines of code are a 100% the same;

*/
const Schema = mongoose.Schema;

/*

    Mongoose needs to know all the properties 
    that are going to be in each record ahead 
    of time, so with this schema object to set 
    those properties. 

    We are going to create a new Schema object
    and set the property googleId, with a type
    of String. IF it was a type of number we 
    just write Number.

    We can freely add or subtract properties 
    later on without making any mess. Example:

    googleId: String,
    name: String

*/
const userSchema = new Schema({
    googleId: String

});


/*

    We are going to create a model class to handle
    the user's collection.

    ------- The 1st argument -------
        Is the name collection

    ------- The 2nd argument -------
        Will be that userSchema we just created

    when the app loads up is going to create the users
    collection. If it is already created then its just 
    going to move on. 

    will not override already created collections.
*/
mongoose.model('users', userSchema);

// ----------------- 2. GO TO passport.js ----------------- //

