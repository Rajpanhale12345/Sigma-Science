const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { pool } = require("../config/db");

// POST /api/auth/login
async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "username and password required" }); 
    }

    const [rows] = await pool
      .promise()
      .query("SELECT * FROM teachers WHERE username = ? LIMIT 1", [username]);

    const teacher = rows[0];
    if (!teacher) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, teacher.password_hash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: teacher.id, username: teacher.username },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    return res.json({
      message: "Login successful",
      token,
      teacher: { id: teacher.id, name: teacher.name, username: teacher.username , timetable : teacher.timetable},
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

// GET /api/auth/me (protected)
async function me(req, res) {
  try {
     
   
    const [rows] = await pool
      .promise()
      .query(
        "SELECT id,  username, created_at FROM teachers WHERE id = ?",
        [req.user.id]
      );

      if(rows.length === 0){
        return res.status(404).json({message : "Teacher not found"})
      }
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}


module.exports = { login, me };
