const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" }
});

module.exports = mongoose.model("User", usersSchema);
