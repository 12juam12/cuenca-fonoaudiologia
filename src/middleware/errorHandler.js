const createError = require("http-errors");

const errorHandler = (err, req, res, next) => {
  console.error(err.code);
  console.log(err)
  // TODO ERRORS
  if (err.expose === true) {
    res.status(err.status || 500).send(err);
  } else {
    res.status(500).send(createError.InternalServerError());
  }
};

module.exports = errorHandler;
