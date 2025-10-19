import User from "../models/User.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const { name, email, phone, nativeLanguage } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = name || user.name;
  user.email = email || user.email;
  user.phone = phone || user.phone;
  user.nativeLanguage = nativeLanguage || user.nativeLanguage;

  await user.save();
  res.json(user);
};
