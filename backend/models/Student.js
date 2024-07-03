const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  major: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Major',
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
