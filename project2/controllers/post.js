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

function myPost(req, res, next) {
  if (req.session.login == 1) {
    Posts.find({ username: req.session.username })
      .sort({ createAt: -1 })
      .exec(function (err, posts) {
        console.log(posts);
        res.render("index", {
          login: req.session.login,
          username: req.session.username,
          posts: posts,
        });
      });
  } else {
    res.redirect("/");
  }
}

function detail(req, res, next) {
  console.log(req.body);
}

module.exports = {
  index,
  myPost,
  detail,
};
