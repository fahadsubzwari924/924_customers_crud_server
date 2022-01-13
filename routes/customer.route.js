const express = require('express');
const Controller = require('../controllers/customer.controller');
const {validate } = require('../middlewares/request-validator.middleware');
const { createCustomer } = require('../validators/customers.validators');

const router = express.Router();

router.post('/create', createCustomer(), validate, Controller.create);
router.get('/', Controller.fetch);
router.route('/?:id')
.get(Controller.getById)
.put(Controller.update)
.delete(Controller.remove);


module.exports = router;