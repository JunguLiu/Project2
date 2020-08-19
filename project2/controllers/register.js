const Users = require("../models/users");
function index(req, res, next) {
  res.render("register", { error: 0 });
}

function register(req, res, next) {
  //check if username is registered
  console.log("hhi");
  Users.find({ username: req.body.username }).exec(function (err, users) {
    console.log(users);
    if (users.length) {
      res.render("register", { error: 1 });
    } else {
      user = new Users();
      user.username = req.body.username;
      user.password = req.body.password;
      user.save(function (err) {
        if (err) return res.render("register");
      });
      res.redirect("/");
      console.log("register success");
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
