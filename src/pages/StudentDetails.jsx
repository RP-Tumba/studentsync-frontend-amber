import React, { useState } from 'react'
import styles from './StudentDetails.module.css';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import avatar from '../assets/avatar.png';
const StudentDetails = () => {
  const[editMode,setEditMode] = useState(true);

  const handleEdit=()=>{
   setEditMode(!editMode);
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
                <div className={styles.mainContainer}>
                  <div className={styles.profileConatainer}>
                        <div className={styles.profile}>
                            <div className={styles.profilePic}>
                              <img src={avatar} alt="" />
                            </div>
                           <div className={styles.profileNames}>
                                  <h3>Alex Rawles</h3>
                                  <p>alexrawles@gmail.com</p>
                              </div>
                        </div>
                         <button className={styles.editButton} onClick={handleEdit}>Edit</button>
                  </div>
                   <div className={styles.contentContainer}>
   <form>
                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="firstname">First Name</label>
                             <input type="text" value={"John"}  placeholder='First name' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                           <div className={styles.inputgroup}>
                             <label htmlFor="lastname">Last Name</label>
                             <input type="text"   placeholder='Last name' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                     </div>

                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="studentId">Student Id</label>
                             <input type="text"  placeholder='Student Id' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                           <div className={styles.inputgroup}>
                             <label htmlFor="email">Email</label>
                             <input type="text"   placeholder='Email' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                     </div>

                      <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="dob">Date Of birth</label>
                             <input type="text"  placeholder='Date of birth' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                           <div className={styles.inputgroup}>
                             <label htmlFor="phone">Contact number</label>
                             <input type="text"  value={"+250 786 456 678"} placeholder='Contact number' className={styles.formControl} disabled={editMode}/>
                
                          </div>
                     </div>

                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                             <label htmlFor="enrollment">Enrollment Date</label>
                             <input type="date"  placeholder='Enrollment Date' className={styles.formControl} disabled={editMode}/>
                          </div> 
                     </div>

                         
                     <div className={styles.inputContainer}>
                          <div className={styles.inputgroup}>
                           {!editMode &&  <button className={styles.saveChange}><SaveIcon/> Save change</button>}
                            
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
                                 <p >alexrawles@gmail.com</p>
                                 <p>1 month ago</p>
                              </div>
 
                           </div>
                              
                       
                          </div> 
                     </div>

                     <div className={styles.inputContainer}>
                         <button className={styles.goback}>
                          <ArrowBackIcon/>
                          Go back</button>
                     </div>
                   </div>
 
                </div>
          </div>
   </>
      
      
  
  )
}

export default StudentDetails
