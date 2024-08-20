const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    contact: {type:String, unique: true},
    message: {type:String, required: true},
});

module.exports = model('feedbacks',myschema);
