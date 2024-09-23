const mongoose = require('mongoose');

const companyDriveSchema = new mongoose.Schema({
  date: Date,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('CompanyDrive', companyDriveSchema);
