const express = require('express');
const router = express.Router();
const Model = require('../Models/FeedbackModal');


router.get('/getall', (req, res) => {
    Model.find({}) //empty brackets will give all the data
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
});
// since mongodb automatically generates id so we can use it also

//  : denotes a url parameter
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);
    Model.find({email: req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });   
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });

});
module.exports = router;