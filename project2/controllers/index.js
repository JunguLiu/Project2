const Posts = require("../models/posts");
const Users = require("../models/users");
const fetch = require("node-fetch");
function index(req, res, next) {
  // Users.find({ username: req.session.username }).exec(function (err, user) {
  //   if (user[0] != null && user[0].avatar == "default.jpg") {
  //     Posts.find({})
  //       .sort({ createAt: -1 })
  //       .exec(function (err, posts) {
  //         res.render("index", {
  //           login: req.session.login,
  //           username: req.session.username,
  //           posts: posts,
  //           avatar: "default.jpg",
  //         });
  //       });
  //   } else {
  //     Posts.find({})
  //       .sort({ createAt: -1 })
  //       .exec(function (err, posts) {
  //         res.render("index", {
  //           login: req.session.login,
  //           username: req.session.username,
  //           posts: posts,
  //           avatar: user.avatar,
  //         });
  //       });
  //   }
  // });

  fetch("http://localhost:3000/post/allPost")
    .then((response) => response.json())
    .then((posts) => {
      res.render("index", {
        login: req.session.login,
        username: req.session.username,
        posts: posts.reverse(),
        avatar: req.session.avatar,
      });
    });
}

module.exports = { index };
