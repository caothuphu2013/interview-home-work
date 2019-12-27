const q = require("q");

const { collections } = require("../configs/db");
const { dbController } = require("../controllers/index");
const configJWT = require("../configs/jwt");

const {
  comparePassword,
  cryptPassword,
  generateToken
} = require("../helpers/auth");

const register = info => {
  const d = q.defer();
  let current_user = {};

  dbController
    .find(collections.user, {
      username: info.username
    })
    .then(user => {
      if (user.length) {
        d.reject({
          status: 500,
          message: "This username already existed"
        });
      } else {
        cryptPassword(info.password)
          .then(result => {
            current_user = {
              ...info,
              password: result
            };
            return dbController.insert(collections.user, current_user);
          })
          .then(result => {
            d.resolve(result);
          })
          .catch(error => {
            d.reject({
              status: 500,
              message: "Can not insert account into database"
            });
          });
      }
    })
    .catch(error => {
      d.reject({
        status: 500,
        message: "Account can not be found"
      });
    });

  return d.promise;
};

const login = info => {
  const d = q.defer();
  const { username, password } = info;

  dbController
    .find(collections.user, { username })
    .then(result => {
      if (result.length) {
        return comparePassword(password, result[0].password);
      }
    })
    .then(match => {
      if (match) {
        let accessTokenPromise = generateToken(
          {
            username
          },
          configJWT.secret.accessToken,
          configJWT.expires.accessToken
        );
        let refreshTokenPromise = generateToken(
          {
            username
          },
          configJWT.secret.refreshToken,
          configJWT.expires.refreshToken
        );
        q.all([accessTokenPromise, refreshTokenPromise])
          .then(([accessToken, refreshToken]) => {
            const da = q.defer();
            dbController
              .insert(collections.token, {
                accessToken,
                refreshToken
              })
              .then(res => {
                da.resolve({
                  ...res,
                  username
                });
              });
            return da.promise;
          })
          .then(result => {
            result
              ? d.resolve(result)
              : d.reject({
                  status: 500,
                  message: "Invalid Token"
                });
          })
          .catch(err => {
            d.reject({
              status: 500,
              message: "Invalid Token"
            });
          });
      } else {
        d.reject({
          status: 500,
          message: "Username or password wrong"
        });
      }
    })
    .catch(error => {
      d.reject({
        status: 500,
        message: "Account can not be found"
      });
    });
  return d.promise;
};

const getUser = username => {
  var d = q.defer();
  dbController
    .find(collections.user, {
      username
    })
    .then(data => {
      if (data.length > 0) {
        var res = {
          username: data[0].username,
          name: data[0].name
        };
        d.resolve(res);
      } else d.resolve(data);
    })
    .catch(error => {
      d.reject({
        status: 500,
        message: "Account can not be found"
      });
    });
  return d.promise;
};

module.exports = {
  register,
  login,
  getUser
};
