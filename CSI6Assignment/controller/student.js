const Student = require('../models/student');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().exec();
    res.send(students);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id).exec();
    if (!student) {
      res.status(404).send({ message: 'Student not found' });
    } else {
      res.send(student);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true }).exec();
    if (!student) {
      res.status(404).send({ message: 'Student not found' });
    } else {
      res.send(student);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
     const deleted_stu = await Student.findByIdAndDelete(id);
     console.log(deleted_stu);
    res.send("deleted");
  } catch (err) {
    res.status(500).send({ message: 'not deleted',  });
  }
};
