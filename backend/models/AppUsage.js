const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,  // e.g., 'login', 'record_voice'
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AppUsage', usageSchema);