
import DeleteIcon from '@mui/icons-material/Delete';
import Image from '../assets/images/OIP2.jpeg';
import Tablecss from '../components/studentTable.module.css';
import SearchBar from "./searchBar";
import Buttons from "./buttons";
import React, {useEffect, useState } from "react";
import {studentService} from '../lib/api';
import useStudentStore from "../store/studentStore";
const StudentTable=()=>{
    const [students,setStudents]=useState([]);
      const {loading} = useStudentStore();
  
    useEffect(()=>{
      const getData= async()=>{
        try{
          const result=await studentService.getAllStudents();
        
          console.log(result);
          setStudents(result.data);
         
        }catch(err){
          console.error('Failed to load data',err.message);
        }
      };
      getData();
    },[]);
  
  return(
    <div className={Tablecss.mainstudentContainer}>
      <SearchBar/>
         {loading && 
        <div className={Tablecss.loaderContainer}>
             <div className={Tablecss.loader}></div>
        </div>
      
        }
      <table className={Tablecss.studentTable}>
        <thead>
          <tr>
            <th>Profile</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Contact Number</th>
          <th>Student Id</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Enrollment Date</th>
          <th>Delete</th>
        </tr>
        </thead>
       
        <tbody>
          {students.map((student)=>(
            <tr key={student.id}>
               <td>
              <div className={Tablecss.profileImage}>
                <img src={Image} 
                alt={student.name} 
                className={Tablecss.profile}/>
                {student.name}
              </div>
            </td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.contactNumber}</td>
            <td>{student.studentId}</td>
            <td>{student.dateOfBirth}</td>
            <td>{student.email}</td>
            <td>{student.enrollmentDate}</td>
            <td className={Tablecss.deleteIcon}>
              <DeleteIcon/>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Buttons/>
    </div>
  );
}

export default StudentTable;