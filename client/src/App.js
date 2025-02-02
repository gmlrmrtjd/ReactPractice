import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";

const App = () => (
    <Router>
        <Routes>
            <Route path="/attendance/add" element={<Attendance />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
);

export default App;
