const Posts = require("../models/posts");
function index(req, res, next) {
  Posts.find({})
    .sort({ createAt: -1 })
    .exec(function (err, posts) {
      console.log(posts);
      res.render("index", {
        login: req.session.login,
        username: req.session.username,
        posts: posts,
      });
    });
}

module.exports = { index };
