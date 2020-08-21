const Users = require("../models/users");
const md5 = require("md5");

function index(req, res, next) {
  res.render("login", { error: 0 });
}
function login(req, res, next) {
  console.log(req.body);
  const login_username = req.body.username;
  const login_password = md5(req.body.password) + "jungu";
  Users.find({
    username: login_username,
    password: login_password,
  }).exec(function (err, user) {
    if (user.length) {
      req.session.login = 1;
      req.session.username = req.body.username;
      req.session.avatar = user[0].avatar;
      res.redirect("/");
    } else {
      res.render("login", { error: 1 });
    }
  });
}

module.exports = {
  index,
  login,
};
