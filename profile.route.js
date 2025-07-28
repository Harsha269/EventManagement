

const express = require("express");
const router = express.Router();
const controllers = require("../Controllers/profile.controller")
const authh = require("../Middleware/authh")

router.post("/", authh, controllers.createProfile);
router.get("/", authh, controllers.getProfile);
router.put("/", authh, controllers.updateProfile);
router.delete("/", authh, controllers.deleteProfile);

module.exports = router;
