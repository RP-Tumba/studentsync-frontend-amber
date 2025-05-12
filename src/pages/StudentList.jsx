import { useEffect } from "react";
import styles from './student.module.css';

import useStudentStore from "../store/studentStore";

const StudentList = () => {
  // eslint-disable-next-line no-unused-vars
  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div className={styles.container}>Student List</div>;
};

export default StudentList;
