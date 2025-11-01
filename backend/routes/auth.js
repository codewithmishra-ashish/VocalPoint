// backend/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, role = 'worker', name, language } = req.body;
    const user = new User({
      email,
      password,
      role,
      profile: { name, language, isComplete: false }
    });
    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        profile: user.profile
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        profile: user.profile
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/me – FETCH CURRENT USER
router.get('/me', auth(), async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Complete profile
router.put('/profile/:id', auth(), async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.profile = {
      ...user.profile,
      ...req.body,
      isComplete: true
    };
    await user.save();

    res.json({ profile: user.profile });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;