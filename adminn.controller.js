// const User = require('../models/user.model');
const User = require('../Models/users.model')
const Profile = require ('../Models/profile.model')
// const Event = require('../Models/event.model')
// const Event = require('../models/event.model');


// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select('-password');
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// };
exports.getAllUserProfiles = async (req, res) => {
  try {
    const usersWithProfiles = await Profile.find().populate("user", "email role");
    res.json(usersWithProfiles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user profiles" });
  }
}


exports.updateUserRole = async (req, res) => {
  const { role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    res.json({ message: 'Role updated', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update role' });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};


exports.getStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalEvents = await Event.countDocuments();
    const totalAdmins = await User.countDocuments({ role: 'admin' });

    res.json({ totalUsers, totalEvents, totalAdmins });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get stats' });
  }
};
