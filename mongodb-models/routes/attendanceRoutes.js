const express = require('express');
const Attendance = require('../models/Attendance');
const router = express.Router();

// Add more routes as needed
router.get('/', async (req, res) => {
  const attendance = await Attendance.find();
  res.json(attendance);
});

module.exports = router;
