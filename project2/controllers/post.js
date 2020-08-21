const Posts = require("../models/posts");
const User = require("../models/users");

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
  Posts.findById(req.params.id, function (err, post) {
    res.render("detail", {
      post: post,
      login: req.session.login,
    });
  });
}

function allPost(req, res, next) {
  Posts.find({}, function (err, posts) {
    res.json(posts);
  });
}

function myPost(req, res, next) {
  Posts.find({ username: req.session.username }, function (err, posts) {
    res.json(posts);
  });
}

function comment(req, res, next) {
  const now = new Date();
  var new_comment = {
    username: req.session.username,
    content: req.body.content,
    createAt: now.toISOString(),
  };
  Posts.findById(req.params.id, function (err, post) {
    console.log(post);
    post.comment.push(new_comment);
    post.save(function (err) {});
  });
  res.redirect(`/post/${req.params.id}`);
}

function userInfo(req, res, next) {
  console.log(req.query);
  User.find({ username: req.query.username }).exec(function (err, user) {
    res.json(user);
  });
}

module.exports = {
  index,
  detail,
  allPost,
  comment,
  myPost,
  userInfo,
};
