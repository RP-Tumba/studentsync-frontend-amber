import { useReducer } from 'react';
import style from './newstudent.module.css';
import { studentService } from '../lib/api';
import logo from '../assets/logo.png';

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

const Add = ({ onClose }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

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
    if (newstudent) {
      dispatch({ type: 'reset' });
      console.log(newstudent);
      if (onClose) onClose();
    }
  };

  return (
    <div className={style.page}>
      <div className={style.container}>
        <form onSubmit={handleSubmission} className={style.form}>
          <div className={style.header}>
            <img src={logo} alt="Logo" className={style.logo} />
            <h2>STUDENTSYNC</h2>
            <p>Add new student</p>
          </div>

          <div className={style.inputGroup}>
            <input type="text" placeholder="First name" value={state.firstName} onChange={e => dispatch({ type: 'set_firstname', payload: e.target.value })} />
            <input type="text" placeholder="Last name" value={state.lastName} onChange={e => dispatch({ type: 'set_lastname', payload: e.target.value })} />
          </div>

          <div className={style.inputGroup}>
            <input type="date" placeholder="Date of Birth" value={state.dateOfBirth} onChange={e => dispatch({ type: 'set_dateofbirth', payload: e.target.value })} />
            <input type="text" placeholder="Student ID" value={state.studentId} onChange={e => dispatch({ type: 'set_studentid', payload: e.target.value })} />
          </div>

          <input type="email" placeholder="Email" value={state.email} onChange={e => dispatch({ type: 'set_email', payload: e.target.value })} />
          <input type="text" placeholder="Contact Number" value={state.contactNumber} onChange={e => dispatch({ type: 'set_contactnumber', payload: e.target.value })} />
          <input type="date" placeholder="Enrollment Date" value={state.enrollmentDate} onChange={e => dispatch({ type: 'set_enroll', payload: e.target.value })} />

          <div className={style.buttons}>
            <button type="submit" className={style.addBtn}>Add</button>
    
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
