"/progressDetail/:id";
const express = require("express");
const {
  createProgress,
  ReadProgress,
  updateProgress,
} = require("../controllers/progressControllers");
const router = express.Router();

router
  .route("/:studentId")
  .post(createProgress)
  .get(ReadProgress)
  .patch(updateProgress);

module.exports = router;
