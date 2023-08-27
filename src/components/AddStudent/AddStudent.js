import {useState} from 'react';
import "./AddStudent.css"

const AddStudent = ({addStudent}) => {
    const [name, setName] = useState('');
    const [rollno, setRollno] = useState('');


    const handleAddStudent = () => {
        const stq = {name, rollNumber: rollno};
        addStudent(stq);
        setName('');
        setRollno('');
    }
    return (
    <div className='attendance-form'>
      <h2 className='header'>Add Student</h2>
      <div className='form-container'>
    <div className='name-container'>
        <label>Name </label>
        <input type="text" placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)} />
    </div>
    <div className='rollno-container'>
        <label htmlFor="rollno" >Roll Number </label>
        <input type="text" id="rollno" placeholder="Enter Roll Number" value={rollno} onChange={e=>setRollno(e.target.value)} />
    </div>
    </div>
      <button className='mark-attendance' onClick={handleAddStudent}>Add Student</button>
    </div>
    )
}


export default AddStudent;