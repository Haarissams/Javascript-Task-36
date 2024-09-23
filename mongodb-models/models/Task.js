const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  due_date: Date,
  submitted: Boolean,
  topic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
});

module.exports = mongoose.model('Task', taskSchema);
