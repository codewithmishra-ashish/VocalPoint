const express = require("express");
const router = express.Router();
const pool = require("../models/db");

router.get("/", async (req, res) => {
  const tasks = await pool.query("SELECT * FROM tasks");
  res.json(tasks.rows);
});

router.post("/", async (req, res) => {
  const { title, language, pay } = req.body;
  const result = await pool.query(
    "INSERT INTO tasks (title, language, pay) VALUES ($1, $2, $3) RETURNING *",
    [title, language, pay]
  );
  res.json(result.rows[0]);
});

module.exports = router;
