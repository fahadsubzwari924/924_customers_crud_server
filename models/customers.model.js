const mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* Customers Schema definition*/

const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    timestamps: true
})

const User = mongoose.model('customers', CustomerSchema);
module.exports = User;