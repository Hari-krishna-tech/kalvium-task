import React, { useState } from 'react';
import "./AttendanceForm.css"

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
    <div className='attendance-form'>
      <h2 className='header'>Mark Your Attendance</h2>
      <div className='select-container'>
      <select className='student-select' value={selectedStudent} onChange={handleStudentChange}>
        <option value="">Select Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      </div>

      <button className='mark-attendance' onClick={handleMarkAttendance}>Mark Attendance</button>
    </div>
  );
};

export default AttendanceForm;
