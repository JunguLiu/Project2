var express = require("express");
var router = express.Router();
var registerCtrl = require("../controllers/register");

router.get("/", registerCtrl.index);
router.post("/", registerCtrl.register);

module.exports = router;
