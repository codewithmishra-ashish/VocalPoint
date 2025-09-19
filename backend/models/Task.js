import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  textPrompt: String,
  language: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
