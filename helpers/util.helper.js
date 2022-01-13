const DAL = require('../services/dal.service');


/**
   * This is a function to check in the db that if record exists for given conditions or not. 
   *@function get
   * 
   * @param {Object} model - mongoose initated schema model to bind with db collection.
   * @param {String} key - Field of mongo document on behalf of which record existence has to be checked.
   * @param {Number} _id - Mongo generated id field on behalf of which record existence has to be checked.
   * @param {String} selectParams - Is used to get specific fields of the model.
   * @param {String} populateParams - Is used for populating the data inside the reference key.
   * @param {String} sortParams - Is used to get sorted data in accending or decending order.
   * @param {Number} limit - Is used to get specific (limited) number of records.
   * @param {Number} skip - Is used to skip specific number of records.
   * 
   * @string You can add multiple fields in a string with a single space.
   * 
   * @returns If you pass {IsSingle} true then return {Object} otherwize return {ArrayOfObjects} 
   */
const checkIfExists = async (model, isSingleKey = true, queryObject = null, key = null, value = null) => {

    let flag = false;
    let query = {};

    if (!isSingleKey) {
        query = queryObject;
    } else {
        if (value && key) {
            query[key] = key === '_id' ? { $nin: id } : value;
            if (key === '_id') {

            } else {
                query[key] = value;
            }
        }
    }

    try {
        const data = await DAL.get(model, query, true);
        console.log('exist record : ', data);
        if (data) {
            flag = true;
        }
    } catch (e) {
        return console.log(e);
    }

    return flag;
}

const IsObjectEmpty = (obj) =>{
    return Object.keys(obj).length > 0 ? false : true;
}

module.exports = {
    checkIfExists,
    IsObjectEmpty
}