const express = require("express");
const Controllers = require("../Controllers/authh.controller")
const router = express.Router();

router.post("/register",Controllers.register);
router.post("/login", Controllers.login);

module.exports = router;
