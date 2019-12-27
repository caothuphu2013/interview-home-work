const express = require("express");
const { userModel } = require("../models/index");
const { handleSuccess, handleError } = require("../helpers/request");
const { verifyToken } = require("../helpers/auth");

let userRoutes = express.Router();

userRoutes.post("/login", (req, res, next) => {
  userModel
    .login(req.body)
    .then(result => {
      handleSuccess(res, 200, result);
    })
    .catch(error => {
      handleError(res, error.status, error.message);
    });
});

userRoutes.post("/register", (req, res, next) => {
  userModel
    .register(req.body)
    .then(result => {
      handleSuccess(res, 200, result);
    })
    .catch(error => {
      handleError(res, error.status, error.message);
    });
});

userRoutes.get("/user", (req, res, next) => {
  const accessToken = req.headers["x_access_token"];
  verifyToken(accessToken)
    .then(payload => {
      if (payload) {
        userModel
          .getUser(req.query.username)
          .then(result => {
            handleSuccess(res, 200, result);
          })
          .catch(error => {
            handleError(res, error.status, error.message);
          });
      } else {
        handleError(res, 402, "AccessToken is not valid");
      }
    })
    .catch(err => {
      throw err;
    });
});

module.exports = userRoutes;
