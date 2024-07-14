import React, { useEffect, useState } from "react";
import { fetchAttendanceRecords } from "../api";

const AttendanceList = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    useEffect(() => {
        const getRecords = async () => {
            const records = await fetchAttendanceRecords();
            setAttendanceRecords(records);
        };

        getRecords();
    }, []);

    return (
        <div>
            <h1>Attendance Records</h1>
            {attendanceRecords.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Check In Time</th>
                            <th>Check Out Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceRecords.map((record) => (
                            <tr key={record.id}>
                                <td>{record.date}</td>
                                <td>{record.status}</td>
                                <td>{record.checkInTime || "N/A"}</td>
                                <td>{record.checkOutTime || "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No attendance records found.</p>
            )}
        </div>
    );
};

export default AttendanceList;
