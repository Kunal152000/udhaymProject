const StudentProgress = require("../Models/progressModel");

const axios = require("axios");

const createProgress = async (req, res) => {
  try {
    const studentId = req.params.studentId;

    const response = await axios.get("http://localhost:5000/student/");
    const matchValue = response.data?.studentData.find(
      (student) => student.studentId == studentId
    );
    if (matchValue) {
      const progressData = await StudentProgress.create(req.body);
      res.status(201).json(progressData);
    } else {
      res.status(400).send("Student ID not found, please check");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred", error);
  }
};

const ReadProgress = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    console.log(studentId);
    const progress = await StudentProgress.findById({ _id: studentId });
    console.log(progress);
    if (progress) {
      res.status(200).json(progress);
    } else {
      res.status(400).send("Student not found, please check");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred", error);
  }
};
const updateProgress = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentProgress = await StudentProgress.findByIdAndUpdate(
      studentId,
      req.body
    );
    res.status(201).json(studentProgress);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred", error);
  }
};

module.exports = { createProgress, ReadProgress, updateProgress };
