const express = require('express');
const Mentor = require('../models/Mentor');
const router = express.Router();

// Add more routes as needed
router.get('/', async (req, res) => {
  const mentors = await Mentor.find();
  res.json(mentors);
});

module.exports = router;
