import Recording from "../models/Recording.js";

// Upload recording linked to task
export const uploadRecording = async (req, res) => {
  try {
    const { taskId } = req.params;
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const recording = new Recording({
      userId: req.user._id,
      taskId,
      fileUrl: req.file.location, // S3 URL
    });

    await recording.save();
    res.json({ message: "Uploaded successfully", recording });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
};

// Admin review
export const getAllRecordings = async (req, res) => {
  const recordings = await Recording.find().populate("userId taskId");
  res.json(recordings);
};

export const approveRecording = async (req, res) => {
  const recording = await Recording.findById(req.params.id);
  if (!recording) return res.status(404).json({ message: "Not found" });
  recording.status = "approved";
  await recording.save();
  res.json(recording);
};

export const rejectRecording = async (req, res) => {
  const recording = await Recording.findById(req.params.id);
  if (!recording) return res.status(404).json({ message: "Not found" });
  recording.status = "rejected";
  await recording.save();
  res.json(recording);
};
