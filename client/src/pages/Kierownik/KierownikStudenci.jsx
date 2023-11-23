import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const KierownikStudenci = () => {
  const [students, setStudents] = useState([]);
  const [expandedStudent, setExpandedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8080/api/users/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const handleExpand = (student) => {
    setExpandedStudent(expandedStudent === student ? null : student);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.daneLista}>
        <div className={styles.contentLista}>
            <div className={styles.nameContainerStudent}>
                <h1 className={styles.signName}>Lista studentów</h1>
            </div>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Szukaj studenta..."
                value={searchTerm}
                onChange={handleSearch}
                className={styles.inputSearch}
              />
            </div>
            <div className={styles.studentsContainer}>
            {filteredStudents.map((student, index) => (
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
                  Pokój: 404
                  <br />
                  {expandedStudent === student && (
                    <>
                      {student.email}
                      <br />
                      {student.preference.ds && <span>Akademik: {student.preference.ds}</span>}
                      <br />
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

export default KierownikStudenci;
