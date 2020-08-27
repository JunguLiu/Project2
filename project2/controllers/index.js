const Posts = require("../models/posts");
const Users = require("../models/users");
const fetch = require("node-fetch");
function index(req, res, next) {
  console.log(req.session.passport);
  if (req.session.passport) {
    Users.findById(req.session.passport.user, function (err, user) {
      req.session.login = 1;
      req.session.username = user.username;
      req.session.avatar = user.avatar;
    });
  }

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
