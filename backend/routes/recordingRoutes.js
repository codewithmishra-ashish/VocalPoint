import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { uploadRecording, getAllRecordings, approveRecording, rejectRecording } from "../controllers/recordingController.js";
import { upload } from "../utils/s3Uploader.js"; // multer-s3 config

const router = express.Router();

router.post("/upload/:taskId", protect, upload.single("audio"), uploadRecording);
router.get("/all", protect, getAllRecordings);  // Admin only
router.put("/:id/approve", protect, approveRecording);  // Admin only
router.put("/:id/reject", protect, rejectRecording);  // Admin only

export default router;
