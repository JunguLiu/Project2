const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  avatar: String,
});

module.exports = mongoose.model("User", userSchema);
