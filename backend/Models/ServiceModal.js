const {Schema, model} = require('../connection');

const myschema = new Schema({
    sname: {type:String, required: true},
    sdescription: {type:String, required: true},
    content: String,  
    simage: {type:String, default: ""},
    scategory: {type:String, required: true},
    pricingPlan: {type:Array},
});

module.exports = model('services',myschema);
