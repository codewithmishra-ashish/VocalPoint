const express = require('express');
const User = require('../models/User');
const AppUsage = require('../models/AppUsage');
const auth = require('../middleware/auth');
const router = express.Router();

// Get Online Users & Usage (Admin)
router.get('/stats', auth(['admin']), async (req, res) => {
  const users = await User.find({ 'profile.isComplete': true }).select('email role profile');
  const usage = await AppUsage.aggregate([{ $group: { _id: '$action', count: { $sum: 1 } } }]);
  res.json({ users, usage, online: 42 });  // Mock online from Socket.io
});

// Log Usage
router.post('/log', async (req, res) => {
  const log = new AppUsage(req.body);
  await log.save();
  res.json(log);
});

module.exports = router;