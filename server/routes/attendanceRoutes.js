const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.get("/", attendanceController.getAllAttendance);
router.post("/", attendanceController.addAttendance);

module.exports = router;
