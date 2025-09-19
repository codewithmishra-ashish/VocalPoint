import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ["worker", "admin"], default: "worker" },
  balance: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
