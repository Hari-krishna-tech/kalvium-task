import React, { useState } from 'react';

const AttendanceForm = ({ students, markAttendance }) => {
  const [selectedStudent, setSelectedStudent] = useState('');

  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleMarkAttendance = () => {
    markAttendance(selectedStudent);
    setSelectedStudent('');
  };

  return (
    <div>
      <h2>Mark Your Attendance</h2>
      <select value={selectedStudent} onChange={handleStudentChange}>
        <option value="">Select Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      <button onClick={handleMarkAttendance}>Mark Attendance</button>
    </div>
  );
};

export default AttendanceForm;
