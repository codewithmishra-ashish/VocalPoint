const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  language: String,
  reward: Number,
  status: { type: String, enum: ['available', 'claimed', 'completed'], default: 'available' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Company
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);