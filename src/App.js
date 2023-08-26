import React, { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import AttendanceForm from './components/AttendanceForm';
import Nav from './components/Nav/Nav.jsx';

const App = () => {
  const initialStudents = [
    { id: 1, name: 'John Doe', rollNumber: 'A101' },
    { id: 2, name: 'Jane Smith', rollNumber: 'A102' },
    // Add more students...
  ];

  const [students, setStudents] = useState(initialStudents);

  const markAttendance = (studentId) => {
    const updatedStudents = students.map((student) =>
      student.id === parseInt(studentId)
        ? { ...student, attendance: true }
        : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="app">
      <Nav />

      <StudentList students={students} />
      <AttendanceForm students={students} markAttendance={markAttendance} />
    </div>
  );
};

export default App;
