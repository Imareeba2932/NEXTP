const {Schema, model} = require('../connection');

const myschema = new Schema({
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    role: {type:String, default: "user"},
    avatar: {type:String, default: "avatar_placeholder.png"},
    createdAt: Date
});

module.exports = model('users1',myschema);
