const router = require('express').Router();
const Controllers = require("../Controllers/event.controller")
const authh = require('../middleware/auth');

router.post('/', authh, Controllers.createEvent);
router.get('/', authh, Controllers.getUserEvents);
router.put('/:id', authh, Controllers.updateEvent);
router.delete('/:id', authh, Controllers.deleteEvent);

module.exports = router;