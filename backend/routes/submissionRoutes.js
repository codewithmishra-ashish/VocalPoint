const express = require("express");
const multer = require("multer");
const Submission = require("../models/Submission");
const auth = require("../middleware/auth");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", auth("worker"), upload.single("audio"), async (req, res) => {
  try {
    const submission = await Submission.create({
      workerId: req.user.id,
      taskId: req.body.taskId,
      audioUrl: `/uploads/${req.file.filename}`
    });
    res.json(submission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
