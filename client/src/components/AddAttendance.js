import React, { useState } from "react";
import { addAttendanceRecord } from "../api";

const AddAttendance = () => {
    const [formData, setFormData] = useState({
        employeeId: "",
        date: "",
        status: "",
        checkInTime: "",
        checkOutTime: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addAttendanceRecord(formData);
        alert("Attendance record added!");
        setFormData({
            employeeId: "",
            date: "",
            status: "",
            checkInTime: "",
            checkOutTime: "",
        });
    };

    return (
        <div>
            <h1>Add Attendance Record</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Employee ID:
                    <input type="number" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Status:
                    <select name="status" value={formData.status} onChange={handleChange} required>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="On Leave">On Leave</option>
                    </select>
                </label>
                <br />
                <label>
                    Check In Time:
                    <input type="datetime-local" name="checkInTime" value={formData.checkInTime} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Check Out Time:
                    <input type="datetime-local" name="checkOutTime" value={formData.checkOutTime} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add Record</button>
            </form>
        </div>
    );
};

export default AddAttendance;
