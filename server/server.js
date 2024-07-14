const express = require("express");
const path = require("path");
const { connectDB } = require("./config/db");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

// Middleware 설정
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

// 데이터베이스 연결
connectDB();

// API 라우트 설정
app.use("/api/attendance", attendanceRoutes);

// React 애플리케이션 제공
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// 서버 설정 및 시작
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
