const User = require("../Models/users.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
};

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json
//     ({ error: "Invalid credentials" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json
//     ({ error: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: "Login failed" });
//   }
// }
// auth.controller.js
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, "your_secret_key", {
    expiresIn: "1d",
  });

  res.json({
    token,
    role: user.role, 
    name: user.name,
  })
}

const logout = (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
};

const getAuthStatus = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ isAuthenticated: false });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ isAuthenticated: true, role: decoded.role });
  } catch {
    res.json({ isAuthenticated: false });
  }
};

 module.exports = { register , login , logout ,getAuthStatus}
