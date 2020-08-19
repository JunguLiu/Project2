var express = require("express");
var router = express.Router();
var indexCtrl = require("../controllers/index");

router.get("/", indexCtrl.index);
router.get("/mypost", indexCtrl.mypost);

module.exports = router;
