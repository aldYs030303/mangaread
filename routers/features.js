const express = require ("express");
const router = express.Router();
var path = require("path");
router
    .route("/")
    .get((req, res) => res.render(path.resolve("public/views/features.ejs")))
    .post((req, res) => res.send("POST_FORUMS"));
module.exports = router;