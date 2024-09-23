const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Add more routes as needed
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

module.exports = router;
