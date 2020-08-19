var express = require("express");
var router = express.Router();
var postCtrl = require("../controllers/post");

router.post("/", postCtrl.index);
router.get("/mypost", postCtrl.myPost);

router.get("/:id", postCtrl.detail);
module.exports = router;
