import React, { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList/StudentList';
import AttendanceForm from './components/AttendanceForm/AttendanceForm';
import Nav from './components/Nav/Nav.jsx';
import {Routes, Route} from 'react-router-dom';

import AddStudent from './components/AddStudent/AddStudent.js';

const App = () => {
  const initialStudents = [
    { id: 1, name: 'John Doe', rollNumber: 'A101' , attendance: false},
    { id: 2, name: 'Jane Smith', rollNumber: 'A102', attendance: false },
    // Add more students...
  ];

  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const attendance = false;
    const newStudent = { id, ...student, attendance };
    setStudents([...students, newStudent]);
  }

  const markAttendance = (studentId) => {
    const updatedStudents = students.map((student) => {
      if (student.id === parseInt(studentId)) {
        console.log(student.id)
        return { ...student, attendance: !student.attendance }
      }
      return {...student};
    });
    setStudents(updatedStudents);
    console.log(students);
  };

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<AttendanceForm students={students} markAttendance={markAttendance}/>} /> 

        <Route path="/studentlist" element={<StudentList students={students} markAttendance={markAttendance}/>} />

        <Route path="/addstudent" element={<AddStudent addStudent={addStudent}/>} />
        
      </Routes>
      
    </div>
  );
};

export default App;
