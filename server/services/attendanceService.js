const Attendance = require("../models/Attendance");

exports.getAttendance = async (whereClause) => {
    return await Attendance.findAll({ where: whereClause });
};

exports.getAllAttendance = async (whereClause) => {
    return await Attendance.findAll({ where: whereClause });
};

exports.addAttendance = async (data) => {
    return await Attendance.create(data);
};
