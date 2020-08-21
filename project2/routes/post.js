var express = require("express");
var router = express.Router();
var postCtrl = require("../controllers/post");

router.post("/", postCtrl.index);
router.get("/allPost", postCtrl.allPost);
router.get("/myPost", postCtrl.myPost);
router.get("/userInfo", postCtrl.userInfo);
router.get("/:id", postCtrl.detail);
router.post("/:id", postCtrl.comment);

module.exports = router;
