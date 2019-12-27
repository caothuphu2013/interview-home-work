const q = require("q");
const { verifyToken } = require("./auth");
const { dbController } = require("../controllers/index");
const userCollection = require("../configs/db").collections.user;

const checkAccessToken = accessToken => {
  const d = q.defer();

  verifyToken(accessToken)
    .then(payload => {
      return dbController.find(userCollection, {
        username: payload ? payload.username : ""
      });
    })
    .then(user => {
      if (user.length > 0) {
        d.resolve({
          username: user[0].username
        });
      } else {
        d.reject({
          status: 402,
          message: "AccessToken is not valid"
        });
      }
    })
    .catch(error => {
      d.reject({
        status: 500,
        message: "AccessToken is not valid"
      });
    });

  return d.promise;
};

module.exports = {
  checkAccessToken
};
