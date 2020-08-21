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
    //get fileExtension
    var fileExtension = files.avatar.name.substring(
      files.avatar.name.lastIndexOf(".")
    );

    var oldpath = files.avatar.path;
    var newpath =
      path.normalize(__dirname + "/../public/images") +
      "/" +
      req.session.username +
      fileExtension;
    fs.rename(oldpath, newpath, function (err) {
      if (err) {
        res.send("fail");
        return;
      }
      Users.findOneAndUpdate(
        { username: req.session.username },
        { avatar: req.session.username + fileExtension },
        function (err, todd) {}
      );
      req.session.avatar = req.session.username + fileExtension;
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
