const { sequelize } = require("../config/db");
const Attendance = require("../models/Attendance");

const createTables = async () => {
    await sequelize.sync({ force: true });
    console.log("Tables have been created");
};

createTables();
