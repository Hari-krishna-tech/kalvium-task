import React from 'react';
import "./StudentCard.css"

const StudentCard = ({ student, markAttendance }) => {
  const handleClick = () => {
    markAttendance(student.id);

  };
  return (
    <div onClick={handleClick} className={student.attendance?`student-card present`: "student-card absent"}>
      <p className='name'>{student.name}</p>
      <p className='rollno'>Roll Number: {student.rollNumber}</p>
      <p className='attendance'>Attendance: {student.attendance?"Present":"Absent"}</p>
    </div>
  );
};

export default StudentCard;
