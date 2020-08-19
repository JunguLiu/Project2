const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: String,
  content: String,
  createAt: Date,
});

const postSchema = new Schema({
  username: String,
  content: String,
  createAt: Date,
  comment: [commentSchema],
});

module.exports = mongoose.model("Post", postSchema);
