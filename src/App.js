import React, { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList/StudentList';
import AttendanceForm from './components/AttendanceForm/AttendanceForm';
import Nav from './components/Nav/Nav.jsx';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  const initialStudents = [
    { id: 1, name: 'John Doe', rollNumber: 'A101' , attendance: false},
    { id: 2, name: 'Jane Smith', rollNumber: 'A102', attendance: false },
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
      <Routes>
        <Route path="/" element={<AttendanceForm students={students} markAttendance={markAttendance}/>} /> 

        <Route path="/studentlist" element={<StudentList students={students}/>} />

        
      </Routes>
      
    </div>
  );
};

export default App;
