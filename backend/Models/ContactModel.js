const {Schema, model} = require('../connection');

const myschema = new Schema({
    fname: {type:String, required: true},
    lname: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    phone_number: {type:String, unique: true},
    message: {type:String},
   
});

module.exports = model('contacts',myschema);
