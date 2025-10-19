import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const { title, prompt, language, payout } = req.body;
  const task = new Task({ title, prompt, language, payout, createdBy: req.user._id });
  await task.save();
  res.json(task);
};

export const getAvailableTasks = async (req, res) => {
  const tasks = await Task.find(); // filter by language if needed
  res.json(tasks);
};
