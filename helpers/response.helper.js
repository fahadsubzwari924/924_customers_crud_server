/**
  * Utility to send all kinds of responses from here
  * @param {Object} res - A response object to send response back to the request.
  * @param {Object} data - A requested data object that has to be send in response to the request.
  * @param {Array} errors - An array comprises of error messages that generated during request processing.
**/

exports.sendCreated = res => {
  return res.status(201).send({ success: true });
};

exports.sendUpdated = res => {
  //check status code for update
  return res.status(201).send({ success: true });
};

exports.send = (res, data) => {
  return res.status(200).send(data);
};

exports.sendBadRequest = (res, message) => {
  return res.status(400).send({
    success: false,
    message: message.toString()
  });
};

exports.sendRequestBodyErrors = (res, errors) => {
  return res.status(422).send({
    success: false,
    errors
  });
};

exports.sendNotFound = res => {
  return res.status(404).send({
    success: false,
    message: 'Resource not found.'
  });
};



exports.sendInternalServerError = res => {
  return res.status(500).send({
    success: false,
    message: 'Internal server error.'
  });
};


exports.sendAlreadyExist = (res, msg) => {
  return res.status(409).send({
    success: false,
    message: msg
  })
}

exports.sendInternalError = (res, err) => {
  return res.status(500).send({
    success: false,
    message: err
  });
};

exports.sendErrWithMsg = (res, err) => {
  return res.status(400).send({
    success: false,
    message: err
  });
};