import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Odpowiedzi = () => {
    const [issues, setIssues] = useState([]);
    const token = localStorage.getItem("token")
    useEffect(() => {
        axios.get("http://localhost:8080/api/profile/issue/answers", {
            headers: { 'Content-Type': 'application/json', 'x-access-token': token },
        })
            .then((response) => {
                setIssues(response.data);
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
            });
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.daneLista}>
                <div className={styles.statusContent}>
                    <div className={styles.statusHead}>
                        <h1 className={styles.statusName}>Informacja zwrotna</h1>
                    </div>
                    <div className={styles.answerContainer}>
                        {issues.map((issue, index) => (
                            <div className={styles.answerBlock}>
                                <Link key={issue._id} to={`/profile/zgłoszenie/odpowiedzi/${issue._id}`} className={styles.linkStyle}>
                                    <p>{issue.issue_thema}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.studentsContainer}>
                    <div className={styles.applicationsContainer}>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default Odpowiedzi
