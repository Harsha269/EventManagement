const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  name: String,
  email: String,
  phone: String,
  bio: String,
  location: String,
  organization: String
  // education: String,
  // experience: String,
  // skills: [String],
})


module.exports = mongoose.models.Profile || mongoose.model("Profile", profileSchema);
