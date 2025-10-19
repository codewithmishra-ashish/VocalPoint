import mongoose from "mongoose";

const recordingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
  fileUrl: { type: String, required: true },  // Cloud URL
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Recording", recordingSchema);
