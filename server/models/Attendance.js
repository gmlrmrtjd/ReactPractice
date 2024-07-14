const attendanceService = require("../services/attendanceService");

exports.getAttendance = async (req, res) => {
    try {
        const { employeeId, date } = req.query;
        const whereClause = {};
        if (employeeId) whereClause.employeeId = employeeId;
        if (date) whereClause.date = date;

        const attendanceRecords = await attendanceService.getAttendance(whereClause);
        if (!attendanceRecords || attendanceRecords.length === 0) {
            return res.status(404).json({ message: "No attendance records found" });
        }
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllAttendance = async (req, res) => {
    try {
        const { employeeId } = req.query;
        const whereClause = {};
        if (employeeId) whereClause.employeeId = employeeId;

        const attendanceRecords = await attendanceService.getAllAttendance(whereClause);
        if (!attendanceRecords || attendanceRecords.length === 0) {
            return res.status(404).json({ message: "No attendance records found" });
        }
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addAttendance = async (req, res) => {
    try {
        const newRecord = await attendanceService.addAttendance(req.body);
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
