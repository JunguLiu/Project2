const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const Users = require("../models/users");

function index(req, res, next) {
  res.render("setavatar");
}

function doset(req, res, next) {
  console.log("doset running");
  var form = new formidable.IncomingForm();
  form.uploadDir = path.normalize(__dirname + "/../public/images");
  form.parse(req, function (err, fields, files) {
    var oldpath = files.avatar.path;
    var newpath =
      path.normalize(__dirname + "/../public/images") +
      "/" +
      req.session.username +
      ".jpg";
    fs.rename(oldpath, newpath, function (err) {
      if (err) {
        res.send("fail");
        return;
      }
      Users.findOneAndUpdate(
        { username: req.session.username },
        { avatar: "updated" },
        function (err, todd) {}
      );
      res.redirect("/");
    });
  });
}

function cut(req, res, next) {}

module.exports = {
  index,
  doset,
  cut,
};
