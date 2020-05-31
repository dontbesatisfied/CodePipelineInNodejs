var express = require("express");
var router = express.Router();

const startDate = Date();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "CodePipeline Test",
    body: `Started at ${startDate} in ${process.pid}`,
  });
});

module.exports = router;
