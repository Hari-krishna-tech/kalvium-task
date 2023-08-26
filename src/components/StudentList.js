import React from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
