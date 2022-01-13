const DAL = require('../services/dal.service');
const model = require('../models/customers.model');
const { checkIfExists, IsObjectEmpty } = require('../helpers/util.helper');
const responseUtil = require('../helpers/response.helper');
const collections = require('../constants/collections.constant');

const create = async (req, res) => {
    try {
        const queryObj = {
            name: req.body.name,
            email: req.body.email
        }

        /* Checking for duplicate customer entry */
        let exists = await checkIfExists(model, false, queryObj);

        if (!exists) {
            let createCustomer = await DAL.save(model, req.body);
            if (!createCustomer) {
                return responseUtil.sendInternalServerError(res);
            }
            return responseUtil.sendCreated(res);
        }
        return responseUtil.sendAlreadyExist(res, 'Customer already exists!');
    } catch (error) {
        console.log(error);
        return responseUtil.sendInternalError(res, error);
    }
}


const fetch = async (req, res) => {
    try {

        /* Extracting query params here */
        let { name, email, createdAt } = req.query;
        let filters = {}, sortParams = {};

        if (createdAt) {
            sortParams['createdAt'] = createdAt;
        }

        /* Creating filter object based on query params based on name and email field */
        if (name) {
            filters.name = { $regex: name, $options: 'i' };
        }
        if (email) {
            filters.email = { $regex: email, $options: 'i' };
        }

        let customers = await DAL.get(model, IsObjectEmpty(filters) ? {} : filters, false, '', '', sortParams);
        return responseUtil.send(res, customers);
    } catch (error) {
        console.log(error);
        return responseUtil.sendInternalError(res, error);
    }
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        if (id) {
            let query = { _id: id };
            await DAL.update(model, query, req.body);
            return responseUtil.sendUpdated(res);
        } else {
            return responseUtil.sendBadRequest(res);
        }

    } catch (error) {
        return responseUtil.sendInternalError(error);
    }
}

const remove = async (req, res) => {
    try {
        let { id } = req.params;
        if (id) {
            let query = { _id: id };
            await DAL.remove(model, query, req.body);
            return responseUtil.send(res, { success: true });
        } else {
            return responseUtil.sendBadRequest(res);
        }

    } catch (error) {
        return responseUtil.sendInternalError(error);
    }
}


const getById = async (req, res) => {
    try {

        /* Extracting request params here */
        let { id } = req.params;
        let query = {
            _id: id
        };
    
        let customer = await DAL.get(model, query, true);
        if (!customer) {
            return responseUtil.sendErrWithMsg(res, 'Customer not found');
        }
        return responseUtil.send(res, customer);
    } catch (error) {
        console.log(error);
        return responseUtil.sendInternalError(res, error.message);
    }
}


module.exports = {
    create,
    fetch,
    update,
    remove,
    getById
}