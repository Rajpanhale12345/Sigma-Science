const bcrypt = require("bcryptjs");
const { pool } = require("../config/db");

// POST /api/teachers
async function createTeacher(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email, password required" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const sql = 
      "INSERT INTO teachers (name, email, password_hash) VALUES (?, ?, ?)";
    await pool.promise().query(sql, [name, email, passwordHash]);

    return res.status(201).json({ message: "Teacher created successfully" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: err.message });
  }
}

// GET /api/teachers
async function getTeachers(req, res) {
  try {
    const [rows] = await pool
      .promise()
      .query("SELECT id, name, email, created_at FROM teachers");

    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = { createTeacher, getTeachers };
