/*
    We declare a statement, this created an object and 
    assigned it to the module.exports property.

    that allow us to require both this properties into another file. 
    it helps us to export code and make it available to other files in 
    our app. 

    temporary solution....
*/
module.exports = {
    googleClientID: 'blah blah blah notes',
    googleClientSecret: 'blah blah blah notes',
    mongoURI: 'blah blah blah notes',
    cookieKey: 'blah blah blah notes'
}


// ----------------- DISSECTING THE MONGO URI----------------- //
/*
    mongodb://<dbuser>:<dbpassword>@ds1 djakjdhsajkhdsajk v'

    The <dbuser>:<dbpassword> refers to the administrative user we created
    in mlab mongodb database so we have to change that info for the real one
    to be able to log in example:

    mongodb://administrabalch blach :fallou you know the rest@ds141932.mlab.com:41932/wd5-dev'

 */