const express = require('express');
const CompanyDrive = require('../models/CompanyDrive');
const router = express.Router();

// Add more routes as needed
router.get('/', async (req, res) => {
  const drives = await CompanyDrive.find();
  res.json(drives);
});

module.exports = router;
