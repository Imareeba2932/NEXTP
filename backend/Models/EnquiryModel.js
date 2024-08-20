const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    service: {type:String, required: true},
    category: {type:String, required: true},
});

module.exports = model('enquiry',myschema);