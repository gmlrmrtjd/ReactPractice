export const fetchAttendanceRecords = async (employeeId) => {
    const query = employeeId ? `?employeeId=${employeeId}` : "";
    const response = await fetch(`/api/attendance${query}`);
    return response.json();
};

export const addAttendanceRecord = async (data) => {
    const response = await fetch("/api/attendance", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};
