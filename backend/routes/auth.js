const express = require("express");
const router = express.Router();
const pool = require("../models/db");

router.post("/signup", async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  res.json(result.rows[0]);
});

router.post("/login", async (req, res) => {
  const { email } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  if (result.rows.length === 0) return res.status(401).json({ error: "User not found" });
  res.json(result.rows[0]);
});

module.exports = router;
