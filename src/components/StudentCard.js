import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Roll Number: {student.rollNumber}</p>
    </div>
  );
};

export default StudentCard;
