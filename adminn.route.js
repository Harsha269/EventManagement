const router = require('express').Router();
// const { getAllUsers, updateUserRole, deleteUser, getStats } = require('../controllers/admin.controller');
const controllers = require("../Controllers/adminn.controller")
const auth = require('../Middleware/authh');
const isAdmin = require('../middleware/isAdmin');


// router.get('/users', auth, isAdmin, controllers.getAllUsers);
router.get("/user-profiles", auth, isAdmin, controllers.getAllUserProfiles);
router.put('/users/:id/role', auth, isAdmin, controllers.updateUserRole);
router.delete('/users/:id', auth, isAdmin, controllers.deleteUser);
router.get('/stats', auth, isAdmin, controllers.getStats);

module.exports = router;
