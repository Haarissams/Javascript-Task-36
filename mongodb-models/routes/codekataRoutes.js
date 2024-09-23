const express = require('express');
const Codekata = require('../models/Codekata');
const router = express.Router();

// Add more routes as needed
router.get('/', async (req, res) => {
  const codekata = await Codekata.find();
  res.json(codekata);
});

module.exports = router;
