import React from "react";
import students from "../data/inData";
import DeleteIcon from '@mui/icons-material/Delete';
import Tablecss from '../components/studentTable.module.css';
import SearchBar from "./searchBar";
import Buttons from "./buttons";

const StudentTable=()=>{
  return(
    <div className={Tablecss.mainstudentContainer}>
      <SearchBar/>
      <table className={Tablecss.studentTable}>
        <thead>
          <tr>
          <th>User name</th>
          <th>Student ID</th>
          <th>Enrollment date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {students.map((student)=>(
            <tr key={student.id}>
               <td>
              <div className={Tablecss.profileImage}>
                <img src={student.profile} 
                alt={student.name} 
                className={Tablecss.profile}/>
                {student.name}
              </div>
            </td>
            <td>{student.studentId}</td>
            <td>{student.enrollmentDate}</td>
            <td className="status">{student.status}</td>
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