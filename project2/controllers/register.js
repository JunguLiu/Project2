const Users = require("../models/users");
const md5 = require("md5");

function index(req, res, next) {
  res.render("register", { error: 0 });
}

function register(req, res, next) {
  //check if username is registered
  Users.find({ username: req.body.username }).exec(function (err, users) {
    console.log(users);
    if (users.length) {
      res.render("register", { error: 1 });
    } else {
      user = new Users();
      user.username = req.body.username;
      user.password = md5(req.body.password) + "jungu";
      user.save(function (err) {
        if (err) return res.render("register");
      });
      res.redirect("/");
    }
  });
}

function register2(req, res, next) {
  res.render("register2");
}
module.exports = {
  index,
  register,
  register2,
};
