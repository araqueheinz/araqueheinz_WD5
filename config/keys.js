/*
 There is an Existing environment variable called node_EMV
 it tells us if we are in production environment 
 or not
*/

if(process.env.NODE_ENV === 'production'){
    //We are in production environment - return the production keys
    module.exports = require("./prod");
}else{
    //We are in development environment - return the development keys
    module.export = require("./dev");

}
