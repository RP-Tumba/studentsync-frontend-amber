import { useReducer } from 'react';
import style from './AddStudent.module.css';
import { studentService } from '../lib/api';
import { Link } from 'react-router-dom';

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
const Add = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleSubmission = async e => {
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
    }
  };
  return (
    <>
      <div className={style.flex}>
        <form onSubmit={handleSubmission}>
          <div className={style.grid}>
            <div className={style.head}>
              <h2>
                <img />
                &nbsp;&nbsp;&nbsp; STUDENTSYNC
              </h2>
              <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add student</h3>
            </div>
            <div className={style.one}>
              <label>First Name</label>
              <br />
              <input
                type="text"
                value={state.firstName}
                onChange={e => dispatch({ type: 'set_firstname', payload: e.target.value })}
              />
            </div>
            <div className={style.two}>
              <label>Last Name</label>
              <input
                type="text"
                value={state.lastName}
                onChange={e => dispatch({ type: 'set_lastname', payload: e.target.value })}
              />
            </div>
            <div className={style.three}>
              <label>Date of Birth</label>
              <input
                type="date"
                value={state.dateOfBirth}
                onChange={e => dispatch({ type: 'set_dateofbirth', payload: e.target.value })}
              />
            </div>
            <div className={style.four}>
              <label>Student ID</label>
              <input
                type="text"
                value={state.studentId}
                onChange={e => dispatch({ type: 'set_studentid', payload: e.target.value })}
              />
            </div>
            <div className={style.five}>
              <label>Email</label>
              <input
                type="email"
                value={state.email}
                onChange={e => dispatch({ type: 'set_email', payload: e.target.value })}
              />
            </div>
            <div className={style.six}>
              <label>Contact Number</label>
              <input
                type="text"
                value={state.contactNumber}
                onChange={e => dispatch({ type: 'set_contactnumber', payload: e.target.value })}
              />
            </div>
            <div className={style.seven}>
              <label>Enrollment Date</label>
              <input
                type="date"
                value={state.enrollmentDate}
                onChange={e => dispatch({ type: 'set_enroll', payload: e.target.value })}
              />
            </div>
            <div className={style.butto}>
              <button type="submit" className={style.add}>
                Add
              </button>

              <button className={style.cancel}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
