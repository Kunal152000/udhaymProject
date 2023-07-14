const mongoose = require("mongoose");

const StudentRegister = new mongoose.Schema({
  studentName: { type: "String", required: true },
  studentId: { type: "String", required: true },
  studentEmail: { type: "String", required: true },
});


module.exports = mongoose.model("RegisteredStudent", StudentRegister);
