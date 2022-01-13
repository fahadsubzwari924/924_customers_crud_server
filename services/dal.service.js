

/**
   * This is a request to get data or information from a database collection or combination of collections. 
   *@function get
   * 
   * @param {Object} model - mongoose initated schema model to bind with db collection.
   * @param {Object} query - A query that specifies the documents from which to retrieve.
   * @param {Boolean} isSingle - Is used to get a single or multiple records.
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
exports.get = (model, query, isSingle, selectParams = '', populateParams = '', sortParams = '', limit, skip, isLean = false) => {
    return new Promise((resolve, reject) => {

        if (isSingle) {
            model.findOne(query)
                .select(selectParams || "")
                .populate(populateParams || "")
                .lean(isLean)
                .exec((error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        } else {
            model.find(query)
                .select(selectParams || "")
                .populate(populateParams || "")
                .sort(sortParams || "")
                .skip(skip)
                .limit(limit)
                .lean(isLean)
                .exec((error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        }
    });

}


exports.count = (model, query) => {

    return new Promise((resolve, reject) => {
        model.countDocuments(query)
            .exec((error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
    });

}


/**
   * This method is used to insert a new document in a collection..
   *@function save
   * 
   * @param model - Mongoose initated schema model to bind with db collection.
   * @param {String} document - A document to save to the collection.
   * 
   * @returns {Object} returns the newly created document with _id.
   */
exports.save = (model, document) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await model.create(document);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
}


/**
   * This method is used to modify an existing document or documents in a collection. 
   * The method can modify specific fields of an existing document or documents or replace an existing document entirely, 
   * depending on the update parameter. By default, the update() method updates a single document. 
   * Set the Multi-Parameter to update all documents that match the query criteria.
   *@function update
   * 
   * @param model - Mongoose initiated schema model to bind with db collection.
   * @param {Object} query - A query that specifies the documents from which to update.
   * @param {String} document -A document or array of documents to update into the collection.
   * 
   */
exports.update = (model, query, update, options) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await model.updateOne(query, update, options);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}


/**
   * The method is used to remove documents from a collection.
   *@function remove
   * 
   * @param model - Mongoose initated schema model to bind with db collection.
   * @param {Object} query - Specifies deletion criteria using query operators. 
   * To delete all documents in a collection, pass an empty document ({}).
   * 
   */
exports.remove = (model, query) => {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await model.remove(query);
            resolve(result);
        } catch (error) {
            reject(error);
        }
        // model.remove(query, function (error, doc) {
        //     if (error) {
        //         reject(error);
        //     } else {
        //         resolve(doc);
        //     }
        // });
    });
}