import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import User from "./models/User.js";
import Task from "./models/Task.js";
import Submission from "./models/Submission.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Multer setup for file storage (local for now)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Routes
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/upload/:taskId/:userId", upload.single("audio"), async (req, res) => {
  try {
    const { taskId, userId } = req.params;
    const audioUrl = `/uploads/${req.file.filename}`;

    const submission = await Submission.create({
      user: userId,
      task: taskId,
      audioUrl
    });

    res.json({ success: true, submission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
