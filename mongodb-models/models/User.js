const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
  codekata_solved: Number,
  mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }],
});

module.exports = mongoose.model('User', userSchema);
