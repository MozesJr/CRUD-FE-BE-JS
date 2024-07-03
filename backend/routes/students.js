const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Major = require('../models/Major');

// Get all students with major info
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().populate('major');
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  

// Get single student by ID with major info
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('major');
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new student
router.post('/', async (req, res) => {
  const { name, studentId, major, gender } = req.body;
  if (!name || !studentId || !major || !gender) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const student = new Student({
    name,
    studentId,
    major,
    gender
  });
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a student
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    }

    student.name = req.body.name;
    student.studentId = req.body.studentId;
    student.major = req.body.major;
    student.gender = req.body.gender;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    }
    await student.remove();
    res.json({ message: 'Deleted student' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
