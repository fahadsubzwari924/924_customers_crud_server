const { body } = require('express-validator');

const createCustomer = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required')
            .isString().withMessage('Name should be text')
            .isLength({ min: 3, max: 30}).withMessage('Name should be between 3-30 characters'),
        body('email')
            .notEmpty().withMessage('Name is required')
            .isEmail(),
        body('age')
            .isNumeric().withMessage('age should be numeric')
    ]
}

module.exports = {
    createCustomer
};