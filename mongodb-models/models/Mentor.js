const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: String,
  mentees_count: Number,
});

module.exports = mongoose.model('Mentor', mentorSchema);
