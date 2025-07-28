

const Profile = require("../models/profile.model");

const createProfile = async (req, res) => {
  try {
    const { name, email,bio , phone,location , organization  } = req.body;
    const userId = req.user.id;

    const existing = await Profile.findOne({ user: userId });
    if (existing) return res.status(400).json({ error: "Profile already exists" });

    const profile = await Profile.create({
      user: userId,
      name,
      email,
      bio ,
      phone,
      location,
      
      organization,
    });

    res.status(201).json(profile);
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ error: "Error creating profile" });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) return res.status(404).json({ error: "Profile not found" });

    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Error fetching profile" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updated = await Profile.findOneAndUpdate(
      { user: userId },
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Profile not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Error updating profile" });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const deleted = await Profile.findOneAndDelete({ user: userId });

    if (!deleted) return res.status(404).json({ error: "Profile not found" });

    res.json({ message: "Profile deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting profile" });
  }
};

module.exports = {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
};
