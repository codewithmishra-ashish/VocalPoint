import fs from "fs";
import path from "path";
import multer from "multer";
import Recording from "../models/Recording.js";
import jwt from "jsonwebtoken";

// --- Multer Storage Configuration ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userDir = path.join("uploads/audio", req.user._id.toString());
    fs.mkdirSync(userDir, { recursive: true });
    cb(null, userDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `recording-${Date.now()}.webm`;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });

// --- Upload Handler ---
export const uploadRecording = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No audio file uploaded" });

    const recording = new Recording({
      userId: req.user._id,
      fileName: req.file.filename,
      filePath: req.file.path,
      status: "pending",
    });

    await recording.save();
    res.status(200).json({ message: "Recording uploaded successfully!", recording });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Server error during upload" });
  }
};
