const StudentRegister = require("../Models/studentModel");

const Register = async (req, res, next) => {
  const { studentName, studentEmail, studentId } = req.body;

  try {
    if (!studentName || !studentEmail || !studentId) {
      res.status(400);
      throw new Error("Please fill all the fields");
    }

    const studentExists = await StudentRegister.findOne({ studentId });
    if (studentExists) {
      res.status(400).json({ error: "Student details already exist" });
      return;
    }

    const studentData = await StudentRegister.create(req.body);

    res.status(200).json({
      success: true,
      studentData,
    });
  } catch (error) {
    next(error);
  }
};

const Students = async (req, res) => {
  const studentData = await StudentRegister.find();
  res.status(201).json({ studentData });
};

const updateStudents = async (req, res) => {
  let updateStudent = await StudentRegister.findById(req.params.id);
  if (!updateStudent) {
    res.json({ message: "Studentid not correct , or student not found" });
  }
  updateStudent = await StudentRegister.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, useFindAndModify: true, runValidators: true }
  );
  res.status(201).json(updateStudent);
};
const DeleteStudent = async (req, res) => {
  const delStudent = await StudentRegister.findById(req.params.id);
  if (!delStudent) {
    res.json({ message: "Student id not correct , or student not found" });
  }
  const result = await StudentRegister.deleteOne({
    _id: req.params.id,
  });
  if (result.deletedCount === 1) {
    res.status(200).json({ message: "Student deleted successfully" });
  } else {
    res.status(404).json({ error: "Document not found" });
  }
};
module.exports = { Register, Students, updateStudents, DeleteStudent };
