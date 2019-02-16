require("dotenv").config();
const mongoose = require("mongoose");

var url = process.env.MONGO_URI;

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

module.exports.User = require("./user");
module.exports.Poll = require("./poll");
