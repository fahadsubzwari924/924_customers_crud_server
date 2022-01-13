const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('./config/db');
require('dotenv').config();

const routes = require('./routes/index');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    const origin = req.headers.origin;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
})

app.use('/api/v1', routes);

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port} in environment {${process.env.NODE_ENV}}`);
});

