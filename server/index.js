/* eslint-env node */
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const teacherRoutes = require("./routes/teacher.routes.js");
const authRoutes = require("./routes/auth.routes.js"); 
const studentRoutes = require("./routes/student.routes.js")

app.use(cors());
app.use(express.json());

app.use("/api/teachers", teacherRoutes);
app.use("/api/auth", authRoutes); 
app.use("/api/students", studentRoutes)

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Backend is using ${PORT}!`));
