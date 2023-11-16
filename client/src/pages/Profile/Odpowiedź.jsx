import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Kierownik/styles.module.css";
import { useParams } from "react-router-dom";
const Odpowiedź = () => {
    const { issueId } = useParams();
    const [issue, setIssue] = useState([]);
    const token = localStorage.getItem("token")
    useEffect(() => {
        axios.get(`http://localhost:8080/api/profile/issue/answers/${issueId}`, {
            headers: { 'Content-Type': 'application/json', 'x-access-token': token },
        })
            .then((response) => {
                setIssue(response.data);
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
            });
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.daneLista}>
                <div className={styles.contentLista}>
                    </div>
                <div className={styles.studentsContainer}>
                    <div className={styles.applicationsContainer}>
                        <a>Temat: {issue.issue_thema}</a><br/>
                        <a>Treść: {issue.issue_description}</a>
                        <p>Odpowiedź: {issue.resolution_description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Odpowiedź