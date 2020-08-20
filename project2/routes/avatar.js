var express = require("express");
var router = express.Router();
var avatarCtrl = require("../controllers/avatar");

router.get("/", avatarCtrl.index);
router.post("/doset", avatarCtrl.doset);
router.get("/cut", avatarCtrl.cut);
module.exports = router;
