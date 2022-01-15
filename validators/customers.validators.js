const { body } = require('express-validator');

const createCustomer = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required')
            .isString().withMessage('Name must be text not numbers')
            .isLength({ min: 3, max: 30}).withMessage('Name should be between 3-30 characters'),
        body('email')
            .notEmpty().withMessage('Name is required')
            .isEmail()
    ]
}

module.exports = {
    createCustomer
};