const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  language: { type: String, required: true },
  reward: { type: Number, default: 1 },
  status: { type: String, enum: ["active", "closed"], default: "active" }
});

module.exports = mongoose.model("Task", taskSchema);
