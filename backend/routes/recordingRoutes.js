import express from "express";
import Recording from "../models/Recording.js";

const router = express.Router();

// Upload new recording (for now just store URL)
router.post("/", async (req, res) => {
  try {
    const { userId, fileUrl } = req.body;
    const rec = await Recording.create({ user: userId, fileUrl });
    res.status(201).json(rec);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List all recordings
router.get("/", async (req, res) => {
  const recs = await Recording.find().populate("user");
  res.json(recs);
});

export default router;
