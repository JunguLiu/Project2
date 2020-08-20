const Posts = require("../models/posts");

function index(req, res, next) {
  const post = new Posts();
  post.username = req.session.username;
  post.content = req.body.content;
  const now = new Date();
  post.createAt = now.toISOString();
  post.save(function (err) {
    if (err) return res.render("/");
  });
  res.redirect("/");
  console.log("post success");
}

function detail(req, res, next) {
  console.log(req.body);
}

module.exports = {
  index,
  detail,
};
