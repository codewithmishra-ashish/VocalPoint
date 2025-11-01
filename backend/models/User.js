// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['worker', 'company', 'admin'], default: 'worker' },
  profile: {
    name: String,
    language: String,
    companyName: String,
    bio: String,
    interests: String,
    accent: String,
    isComplete: { type: Boolean, default: false } // NEW: profile status
  },
  earnings: { type: Number, default: 0 },
  datasets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dataset' }]
}, { timestamps: true });

// Hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);