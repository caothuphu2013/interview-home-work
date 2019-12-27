const configDB = require("../configs/db");
const mongoClient = require('mongodb').MongoClient;

const connectDB = callback => {
  mongoClient.connect(
    configDB.url,
    (error, client) => {
      if (error) {
        return callback(error, null);
      } else {
        return callback(null, client);
      }
    }
  );
};

module.exports = {
  connectDB
}
