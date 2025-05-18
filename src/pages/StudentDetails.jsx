import React, { useEffect, useState,useReducer } from 'react'
import styles from './css/StudentDetails.module.css';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import avatar from '../assets/avatar.png';
import {studentService} from '../lib/api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const initialState ={
   firstName:'',
   lastName:'',
   studentId:'',
   email:'',
   dateOfBirth:'',
   contactNumber:'',
   enrollmentDate:''
}
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
            default:
                return state;
        }
    };
const StudentDetails = () => {
   const [state, dispatch] = useReducer(reducerFunction, initialState);
   const navigate = useNavigate();
   const[student,setStudent] = useState({});
  const[editMode,setEditMode] = useState(true);
   const[loading,setLoading] = useState(true);
   const[message,setMessage] = useState("")
    
  const handleEdit=()=>{
   setEditMode(!editMode);
  }
  const{id} = useParams();
useEffect(() => {
  const fetchData = async () => {
    const data = await studentService.getStudentById(id);
    setStudent(data.data);
    dispatch({ type: 'set_firstname', payload: data.data.firstName });
    dispatch({ type: 'set_lastname', payload: data.data.lastName });
    dispatch({ type: 'set_studentid', payload: data.data.studentId });
    dispatch({ type: 'set_email', payload: data.data.email });
    dispatch({ type: 'set_dateofbirth', payload: data.data.dateOfBirth });
    dispatch({ type: 'set_contactnumber', payload: data.data.contactNumber });
    dispatch({ type: 'set_enroll', payload: data.data.enrollmentDate });
    setLoading(false);
  };
  fetchData();
}, []);

 const getTimeAgo = (date) => {
  const d = new Date(date), now = new Date();
  const diff = Math.floor((now - d) / 1000); // in seconds

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
  return `${Math.floor(diff / 31536000)} yr ago`;
};

const handleSubmission =async(e)=>{

   e.preventDefault();
  const formData = {

  firstName: state.firstName,
  lastName: state.lastName,
  studentId: state.studentId,
  email: state.email,
  dateOfBirth: state.dateOfBirth,
  contactNumber: state.contactNumber,
  enrollmentDate: state.enrollmentDate
};

   handleEdit()
   const updateData = await studentService.updateStudent(id,formData);
  
   if(updateData.success==true){
      navigate("/");
  
   }else{
 setMessage(updateData.message)
   }
}


  return (
   <>
   <div className={styles.topbar}>
        <div className={styles.topbarContent}>
            <p className={styles.title}>Welcome</p>
        <p className={styles.date}>{new Date().toDateString()}</p>
        </div>
        <div  className={styles.searchbar}>
            <SearchIcon className={styles.searchIcon}/>
            <div>
             <input type='text' placeholder='search....' className={styles.searchInput} />
            </div>
        </div>
      </div>
                
         <div className={styles.container}>
              <div className={styles.topHeader}>
              </div>
       {!loading &&
                <div className={styles.mainContainer}>
                  <div className={styles.profileConatainer}>
                        <div className={styles.profile}>
                            <div className={styles.profilePic}>
                              <img src={avatar} alt="" />
                            </div>
                           <div className={styles.profileNames}>
                                  <h3>{`${student.firstName} ${student.lastName}`}</h3>
                                  <p>{student.email}</p>
                              </div>
                        </div>
                         <button className={styles.editButton} onClick={handleEdit}>Edit</button>
                  </div>
                   <div className={styles.contentContainer}>
    <form onSubmit={handleSubmission}>
       {message.includes("students_email_key")&&<p className={styles.checking}>Please! the email you have entered is already exist</p>}
       {message.includes("students_student_id_key")&&<p className={styles.checking}>Please! the student-id you have entered is already exist</p>}
                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="firstname">First Name</label>
                             <input type="text" value={state.firstName}  
                               onChange={(e) => dispatch({ type: 'set_firstname', payload: e.target.value })} 
                             placeholder='First name' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                           <div className={styles.inputgroup}>
                             <label htmlFor="lastname">Last Name</label>
                             <input type="text" value={state.lastName}  
                             onChange={(e) => dispatch({ type: 'set_lastname', payload: e.target.value })} 
                             placeholder='Last name' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                     </div>

                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="studentId">Student Id</label>
                             <input type="text" value={state.studentId} 
                             onChange={(e) => dispatch({ type: 'set_studentid', payload: e.target.value })} 
                             placeholder='Student Id' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                           <div className={styles.inputgroup}>
                             <label htmlFor="email">Email</label>
                             <input type="text" value={state.email}  
                             onChange={(e) => dispatch({ type: 'set_email', payload: e.target.value })} 
                             placeholder='Email' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                     </div>

                      <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="dob">Date Of birth</label>
                             <input type="date" value={state.dateOfBirth}  
                             onChange={(e) => dispatch({ type: 'set_dateofbirth', payload: e.target.value })} 
                             placeholder='Date of birth' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                           <div className={styles.inputgroup}>
                             <label htmlFor="phone">Contact number</label>
                             <input type="text" value={`${state.contactNumber}`} 
                             onChange={(e) => dispatch({ type: 'set_contactnumber', payload: e.target.value })} 
                             placeholder='Contact number' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                     </div>

                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="enrollment">Enrollment Date</label>
                             <input type="date" value={`${state.enrollmentDate}`} 
                             onChange={(e) => dispatch({ type: 'set_enroll', payload: e.target.value })} 
                             placeholder='Enrollment Date' className={styles.formControl} disabled={editMode}/>
                          </div> 
                     </div>

                         
                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                           {!editMode &&  <button className={styles.saveChange} type='submit'><SaveIcon/> Save change</button>}
                            
                          </div> 
                     </div>

</form>
                                   <div className={styles.inputContainer}>
                           
                          <div className={styles.emailcontainer}>
                           <h4>My email address</h4>
                           <div className={styles.subEmailcontainer}>
                              <div className={styles.iconContainer}>
                                 <EmailIcon className={styles.icon}/> 
                              </div>
                              
                              <div className={styles.emailcontainer}>
                                 <p >{student.email}</p>
                                 <p>{getTimeAgo(student.createdAt)}</p>
                              </div>
 
                           </div>
                              
                       
                          </div> 
                     </div>

                     <div className={styles.inputContainer}>
                         <button className={styles.goback} onClick={()=>navigate("/allstudent")}>
                          <ArrowBackIcon/>
                          Go back</button>
                     </div>
                   </div>
 
                </div>
                }
                <div className={styles.loaderContainer}>
                    {loading && <span className={styles.loader}></span>}  
                </div>
               
          </div>
   </>
      
      
  
  )
}

export default StudentDetails
