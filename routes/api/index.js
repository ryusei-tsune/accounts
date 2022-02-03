const express = require("express");
const router = express();

router.use("/", require("./process"));
router.use("/users", require("./users"));

module.exports = router;
