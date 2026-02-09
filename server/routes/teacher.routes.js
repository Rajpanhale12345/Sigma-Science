const express = require('express');
const app = express();
const {createTeacher, getTeachers} = require("../controllers/teacher.controller");
const router = express.Router();

  router.post('/', createTeacher);
  router.get('/', getTeachers);
 

  module.exports = router;
