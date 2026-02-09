const express = require("express");
const app = express();
const router = express.Router();

const {login,me} = require("../controllers/student.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/login", login);
router.get("/me", authMiddleware, me);

module.exports = router;
