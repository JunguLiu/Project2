const Posts = require("../models/posts");
const Users = require("../models/users");

function index(req, res, next) {
  console.log(req.session.username);

  Users.find({ username: req.session.username }).exec(function (err, user) {
    if (user[0] != null && user[0].avatar == "default") {
      Posts.find({})
        .sort({ createAt: -1 })
        .exec(function (err, posts) {
          res.render("index", {
            login: req.session.login,
            username: req.session.username,
            posts: posts,
            avatar: "default",
          });
        });
    } else {
      Posts.find({})
        .sort({ createAt: -1 })
        .exec(function (err, posts) {
          res.render("index", {
            login: req.session.login,
            username: req.session.username,
            posts: posts,
            avatar: req.session.username,
          });
        });
    }
  });
}

module.exports = { index };
