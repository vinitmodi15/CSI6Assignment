const express = require('express');
const router = express.Router();
const StudentController = require('../controller/student');

router.post('/', StudentController.createStudent);
router.get('/', StudentController.getStudents);
router.get('/:id', StudentController.getStudentById);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;