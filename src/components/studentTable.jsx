
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import Image from '../assets/images/OIP2.jpeg';
import Tablecss from '../components/studentTable.module.css';
import SearchBar from "./searchBar";
import Buttons from "./buttons";
import React, {useEffect, useState } from "react";
import {studentService} from '../lib/api';
import useStudentStore from "../store/studentStore";
import { useNavigate } from 'react-router-dom';
const StudentTable=()=>{
    const [students,setStudents]=useState([]);
    const[message,setMessage] = useState(false);
      const {loading} = useStudentStore();
    
    useEffect(()=>{
      const getData= async()=>{
        try{
          const result=await studentService.getAllStudents();
        
          setStudents(result.data);
         
        }catch(err){
          console.error('Failed to load data',err.message);
        }
      };
      getData();
    },[]);
  const navigate = useNavigate();
      const handleNavigate=(id)=>{
        navigate(`/student/${id}`)
      }

      const deleteFunction =async(id)=>{
        const deleteStudent =await studentService.deleteStudent(id);
        setStudents(students.filter(students=>students.studentId !==id));
        setMessage(true)
        
         
      }
  return(
    <div className={Tablecss.mainstudentContainer}>
      <SearchBar setStudents={setStudents}/>
         {loading && 
        <div className={Tablecss.loaderContainer}>
             <div className={Tablecss.loader}>

             </div>
        </div>
      
        }
        {message &&<p className={Tablecss.delete}>Delete student is done successfully <DoneIcon/></p>}
      <table className={Tablecss.studentTable}>
        <thead>
          <tr>
            <th>Profile</th>
          <th>username</th>
          <th>Student Id</th>
          <th>Enrollment Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        </thead>
       
        <tbody>
          {students.map((student)=>(
            <tr key={student.id}  className={Tablecss.trow}>
               <td>
              <div className={Tablecss.profileImage}>
                <img src={Image} 
                alt={student.name} 
                className={Tablecss.profile}/>
                {student.name}
              </div>
            </td>
      
            <td>{`${student.firstName} ${student.lastName}`}</td>
            <td>{student.studentId}</td>
            
           <td>{student.enrollmentDate}</td>
          <td>Enrolled</td>
           
            <td className={Tablecss.deleteIcon}>
              <DeleteIcon onClick={()=>deleteFunction(student.studentId)}/>
              <EditIcon className={Tablecss.EditIcon} onClick={()=>handleNavigate(student.id)}/>
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