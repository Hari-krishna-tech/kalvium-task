import React from 'react';
import StudentCard from './StudentCard';
import "./StudentList.css"

const StudentList = ({ students, markAttendance }) => {
  return (
    <div className="student-list">
      <h2 className='student-list-header'>Student List</h2>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} markAttendance={markAttendance}/>
      ))}
    </div>
  );
};

export default StudentList;
