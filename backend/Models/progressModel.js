const mongoose = require("mongoose");

const Progress = new mongoose.Schema({
  studentId: { type: "String", required: true },
  moneySpentThisWeek: { type: Number },
  moneyEarnedThisWeek: { type: Number },
  itemSoldThisWeek: { type: Number },
  lossThisWeek: { type: Number },
  profitThisWeek: { type: Number },
});

const StudentProgress = mongoose.model("StudentProgress", Progress);

module.exports = StudentProgress;
