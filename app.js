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

app.use('/api/v1', routes);

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port} in environment {${process.env.NODE_ENV}}`);
});

