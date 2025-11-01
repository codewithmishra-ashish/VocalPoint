const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');  // See below
const router = express.Router();

// Get Tasks (Worker)
router.get('/', auth(['worker']), async (req, res) => {
  const tasks = await Task.find({ status: 'available' });
  res.json(tasks);
});

// Claim Task
router.put('/:id/claim', auth(['worker']), async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, { status: 'claimed', assignedTo: req.user.id }, { new: true });
  res.json(task);
});

module.exports = router;