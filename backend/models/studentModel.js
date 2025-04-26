const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a first name']
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number']
  },
  enrollmentNo: {
    type: String,
    required: [true, 'Please add an enrollment number'],
    unique: true
  },
  course: {
    type: String,
    required: [true, 'Please add a course']
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  dateOfBirth: {
    type: Date,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
