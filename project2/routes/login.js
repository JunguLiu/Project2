var express = require("express");
var router = express.Router();
var loginCtrl = require("../controllers/login");
/* GET home page. */
router.get("/", loginCtrl.index);
router.post("/", loginCtrl.login);
router.get("/logout", loginCtrl.logout);

module.exports = router;
