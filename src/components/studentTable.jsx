import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import Image from '../assets/images/OIP2.jpeg';
import Tablecss from '../components/studentTable.module.css';
import SearchBar from "./searchBar";
import React, { useEffect, useState } from "react";
import { studentService } from '../lib/api';
import useStudentStore from "../store/studentStore";
import { useNavigate } from 'react-router-dom';
import Add from '../components/addNewStudent'; 
import modalStyles from './Modal.module.css'; 

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false); 
  const studentsPerPage = 10;

  const { loading } = useStudentStore();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await studentService.getAllStudents();
        setStudents(result.data);
      } catch (err) {
        console.error('Failed to load data', err.message);
      }
    };
    getData();
  }, []);

  
  const deleteFunction = async (id) => {
    await studentService.deleteStudent(id);
    setStudents(prev => prev.filter(student => student.studentId !== id));
    setMessage(true);
    setTimeout(() => setMessage(false), 3000);
  };

  const handleNavigate = (id) => {
    navigate(`/student/${id}`);
  };

  const totalPages = Math.ceil(students.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <div className={Tablecss.mainstudentContainer}>
      <SearchBar setStudents={setStudents} setShowAddForm={setShowAddForm}/>

      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        
      </div>

      {loading && (
        <div className={Tablecss.loaderContainer}>
          <div className={Tablecss.loader}></div>
        </div>
      )}

      {message && (
        <p className={Tablecss.delete}>
          Delete student is done successfully <DoneIcon />
        </p>
      )}

      <div className={Tablecss.tableResponsiveWrapper}>
        <table className={Tablecss.studentTable}>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Username</th>
              <th>Student ID</th>
              <th>Enrollment Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentStudents.map((student) => (
              <tr key={student.id} className={Tablecss.trow}>
                <td data-label="Profile">
                  <div className={Tablecss.profileImage}>
                    <img src={Image} alt={student.name} className={Tablecss.profile} />
                    {student.name}
                  </div>
                </td>
                <td data-label="Username">{`${student.firstName} ${student.lastName}`}</td>
                <td data-label="Student ID">{student.studentId}</td>
                <td data-label="Enrollment Date">{student.enrollmentDate}</td>
                <td data-label="Status">Enrolled</td>
                <td data-label="Action" className={Tablecss.deleteIcon}>
                  <DeleteIcon onClick={() => deleteFunction(student.studentId)} />
                  <EditIcon className={Tablecss.EditIcon} onClick={() => handleNavigate(student.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={Tablecss.paginationContainer}>
        <button
          className={Tablecss.pageButton}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {(() => {
          let startPage = Math.max(1, currentPage - 2);
          let endPage = Math.min(totalPages, startPage + 4);

          if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
          }

          const pageNumbers = [];
          for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
          }

          return pageNumbers.map((page) => (
            <button
              key={page}
              className={`${Tablecss.pageButton} ${currentPage === page ? Tablecss.active : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ));
        })()}

        <button
          className={Tablecss.pageButton}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

    
      {showAddForm && (
        <div className={modalStyles.modalOverlay}>
          <div className={modalStyles.modalWrapper}>
            <Add onClose={() => setShowAddForm(false)} />
            <button className={modalStyles.modalClose} onClick={() => setShowAddForm(false)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;