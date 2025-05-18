import { useReducer } from 'react';
import { useState } from 'react';
import style from './css/AddStudent.module.css';
import Log from '../assets/logo.png'
import { studentService } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  studentId: '',
  email: '',
  dateOfBirth: '',
  contactNumber: '',
  enrollmentDate: '',
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'set_firstname':
      return { ...state, firstName: action.payload };
    case 'set_lastname':
      return { ...state, lastName: action.payload };
    case 'set_studentid':
      return { ...state, studentId: action.payload };
    case 'set_email':
      return { ...state, email: action.payload };
    case 'set_dateofbirth':
      return { ...state, dateOfBirth: action.payload };
    case 'set_contactnumber':
      return { ...state, contactNumber: action.payload };
    case 'set_enroll':
      return { ...state, enrollmentDate: action.payload };
    case 'reset':
      return { ...initialState };
    default:
      return state;
  }
};

const Add = ({ onClose, refreshData }) => {
   const [message,setMessage] = useState("");
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const navigate = useNavigate();
  const handleSubmission = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: state.firstName,
      lastName: state.lastName,
      studentId: state.studentId,
      email: state.email,
      dateOfBirth: state.dateOfBirth,
      contactNumber: state.contactNumber,
      enrollmentDate: state.enrollmentDate,
    };

    const newstudent = await studentService.createStudent(formData);
     
    if (newstudent.success==true) {
        
      dispatch({ type: 'reset' });
     
      
      if (onClose) onClose();     
      if (refreshData) refreshData();
      navigate("/allstudent", {
    state: { message: `${state.firstName} ${state.lastName} is inserted` }
  });
    }else{
      setMessage(newstudent.message);
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <form onSubmit={handleSubmission} className={style.form}>
          <div className={style.header}>
            <img src={Log} alt="Logo" className={style.logo} />
            <h2>Add new student</h2>
          
          </div>
     {message.includes("students_email_key") && <p className={style.checking}>Email is already exist.</p>}
         {message.includes("students_student_id_key")&&<p className={style.checking}>the student-id is already exist</p>}
          <div className={style.inputGroup}>
           
            <input
              type="text"
              placeholder="First name"
              value={state.firstName}
              onChange={e => dispatch({ type: 'set_firstname', payload: e.target.value })}
              required
            />
            
            <input
              type="text"
              placeholder="Last name"
              value={state.lastName}
              onChange={e => dispatch({ type: 'set_lastname', payload: e.target.value })}
              required
            />
          </div>

          <div className={style.inputGroup}>
            
            <input
              type="date"
              placeholder="Date of Birth"
              value={state.dateOfBirth}
              onChange={e => dispatch({ type: 'set_dateofbirth', payload: e.target.value })}
              required
            />
            
            <input
              type="text"
              placeholder="Student ID"
              value={state.studentId}
              onChange={e => dispatch({ type: 'set_studentid', payload: e.target.value })}
              required
            />
          </div>
          <p className={style.enrollement}>Email</p>
          <input
            type="email"
            value={state.email}
            onChange={e => dispatch({ type: 'set_email', payload: e.target.value })}
            required
          />
          <p className={style.enrollement}>Contact Number</p>
          <input
            type="text"
            value={state.contactNumber}
            onChange={e => dispatch({ type: 'set_contactnumber', payload: e.target.value })}
            required
          />
           <p className={style.enrollement}>Enrollement Date</p>
          <input
            type="date"
            value={state.enrollmentDate}
            onChange={e => dispatch({ type: 'set_enroll', payload: e.target.value })}
            required
          />

          <div className={style.buttons}>
            <button type="submit" className={style.addBtn}>Add</button>
            <button type="button" className={style.cancelBtn} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
