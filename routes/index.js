const express = require('express');
const cors = require('cors');
const responseUtil = require('../helpers/response.helper');


const customerR = require('../routes/customer.route');

const router = express.Router();


router.use(cors());

router.use('/customers', require('./customer.route'));


/** Returned when requested api url not found **/
// router.use((req, res) => responseUtil.sendNotFound(res));

module.exports = router;