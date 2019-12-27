const handleSuccess = (res, status, data) => {
  return res.status(status).send({
    status,
    data
  });
};

const handleError = (res, status, messageError = "Error") => {
  return res.status(status).send({
    status,
    messageError
  });
};

module.exports = {
  handleSuccess,
  handleError
};
