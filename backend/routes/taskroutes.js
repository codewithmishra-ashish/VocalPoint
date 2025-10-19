import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createTask, getAvailableTasks } from "../controllers/taskController.js";

const router = express.Router();

router.post("/create", protect, createTask);
router.get("/available", protect, getAvailableTasks);

export default router;
