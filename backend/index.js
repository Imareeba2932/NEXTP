const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const UserRouter = require('./Router/UserRouter');
const ContactRouter = require('./Router/ContactRouter');
const ServicesRouter = require('./Router/Services');
const EnquiryRouter = require('./Router/EnquiryRouter');
const UtilRouter = require('./Router/Utils');


app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json());
app.use('/users1', UserRouter);
app.use('/contacts', ContactRouter);
app.use('/services', ServicesRouter);
app.use('/util', UtilRouter);

app.use(express.static('./static/uploads'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);