const monogoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/chatApp";

const connectToMongo = () => {
  monogoose.connect(mongoURI).then(() => {
    console.log("Connected to Mongo");
  });
};

module.exports = connectToMongo;
