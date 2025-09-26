const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * @route   GET /api/tasks
 * @desc    Get all active tasks (workers can see them)
 */
router.get("/", auth(), async (req, res) => {
  try {
    const tasks = await Task.find({ status: "active" });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @route   POST /api/tasks
 * @desc    Create new task (Admin only)
 */
router.post("/", auth("admin"), async (req, res) => {
  try {
    const { text, language, reward } = req.body;
    const task = await Task.create({ text, language, reward });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @route   PUT /api/tasks/:id/close
 * @desc    Close a task (Admin only)
 */
router.put("/:id/close", auth("admin"), async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: "closed" },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
