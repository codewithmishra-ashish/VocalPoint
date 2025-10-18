import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ["worker", "company", "admin"], default: "worker" },
  emailVerified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false },
});

export default mongoose.model("User", userSchema);
