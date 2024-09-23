const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  status: String,
  task_submitted: Boolean,
});

module.exports = mongoose.model('Attendance', attendanceSchema);
