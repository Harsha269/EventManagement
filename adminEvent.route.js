const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const controllers = require("../Controllers/adminEvent.controller")
router.get("/admin/events", adminAuth, getAllEvents);
router.put("/admin/events/:id/status", adminAuth, updateEventStatus);
router.delete("/admin/events/:id", adminAuth, deleteEvent);

module.exports = router;
