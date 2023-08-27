import React, { useState } from 'react';
import "./AttendanceForm.css"

const AttendanceForm = ({ students, markAttendance }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [present, setPresent] = useState(false);

  const handleStudentChange = (event) => {
    
    if(event.target.value === ""){
      // setPresent(false);
      return;
    }
   // console.log(event.target.value)
    for(let i=0;i<students.length;i++){
      if(students[i].id === parseInt(event.target.value)){
       // console.log(students[i].attendance)
        setPresent(students[i].attendance);
        break;
      }
    }
    setSelectedStudent(event.target.value);
    
  };

  const handleMarkAttendance = () => {
    markAttendance(selectedStudent);
    setSelectedStudent('');
    setPresent(false);
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

      <button className='mark-attendance' onClick={handleMarkAttendance}>Mark {present?"Absent":"Present"}</button>
    </div>
  );
};

export default AttendanceForm;
