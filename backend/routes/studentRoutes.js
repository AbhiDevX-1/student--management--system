const express = require('express');
const router = express.Router();

// Import the controller functions
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

// Define routes for the students
router.route('/')
  .get(getStudents)        // GET /api/students - Fetch all students
  .post(createStudent);     // POST /api/students - Create a new student

router.route('/:id')
  .get(getStudent)         // GET /api/students/:id - Get a student by ID
  .put(updateStudent)      // PUT /api/students/:id - Update a student by ID
  .delete(deleteStudent);  // DELETE /api/students/:id - Delete a student by ID

module.exports = router;
