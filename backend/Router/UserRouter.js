const express = require('express');
const router = express.Router();
const Model = require('../Models/UserModel');
 const verifyToken = require('./verifiedToken')

router.post('/add', (req, res) => {
    console.log(req.body);
    // Storing data to mongodb
    new Model(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        });
});
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
router.get('/getbyid/:id', (req, res) => {
    // getting data from client
    console.log(req.params.id);

    // finding the data with given id
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});
//  : denotes a url parameter
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.post("/authenticate", (req, res) => {
    Model.findOne({ email: req.body.email })
        .then((result) => {
            if (result) {
                new Model(result).comparePassword(req.body.password, (err, isMatch) => {
                    if (err || !isMatch) {
                        console.error("Error authenticating user", err);
                        res.status(500).send({ status: "failed" });
                    } else {

                        const { _id, email, role, username, avatar } = result;
                        const payload = { _id, email, role, username, avatar };

                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            { expiresIn: '3 days' },
                            (err, token) => {
                                if (err) {
                                    console.error("Error authenticating user", err);
                                    res.status(500).send({ status: "failed" });
                                } else {
                                    console.log("User authenticated");
                                    res.status(200).json({ token, username, role, avatar });
                                }
                            }
                        )
                    }
                });
            } else {
                console.error("Error authenticating user");
                res.status(501).json({ status: "failed" });
            }
        })
        .catch((err) => {
            console.error("Error authenticating user", err);
            res.status(502).json({ status: "failed" });
        });
});

router.get("/authorise", verifyToken, (req, res) => {
    res.status(200).json({ allowed: true });
})
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new will give updated response
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
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

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get("/getuser/:id", (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});
module.exports = router;