import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const OpiekunStudenci = () => {
  const [students, setStudents] = useState([]);
  const [expandedStudent, setExpandedStudent] = useState(null);

  useEffect(() => {
    // Fetch the list of students when the component mounts
    axios.get("http://localhost:8080/api/users/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const handleExpand = (student) => {
    // Toggle the expanded state for the selected student
    setExpandedStudent(expandedStudent === student ? null : student);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.daneLista}>
        <div className={styles.contentLista}>
            <div className={styles.nameContainerLista}>
                <h1 className={styles.signName}>Lista studentów</h1>
            </div>
            <div className={styles.studentsContainer}>
            {students.map((student, index) => (
              <div
                key={student._id}
                className={`${styles.studentsBlock} ${expandedStudent === student ? styles.expanded : ''}`}
                onMouseEnter={() => handleExpand(student)}
              >
                <img
                  src={`http://localhost:8080/uploads/${student.profile_picture}`}
                  alt="Profile Picture"
                  className={styles.profilePicture}
                />
                <p className={styles.studentText}>
                  {student.first_name} {student.last_name}
                  <br />
                  {student.department}
                  <br />
                  {student.faculty}
                  <br />
                  {expandedStudent === student && (
                    <>
                      {student.email}
                      <br />
                      {student.preference.ds}
                      <br />
                      Pokój 404
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpiekunStudenci;
