import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
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
                <div className={styles.messageContent}>
                    <div className={styles.messageHead}>
                        <h1 className={styles.signName}>Informacja zwrotna</h1>
                    </div>
                    <div className={styles.fieldsTheme}>
                        <div className={styles.fieldTheme}>
                            <label className={styles.labelMail}>Temat</label>
                            <p className={styles.dataMail}>{issue.issue_thema}</p>
                        </div>
                        <div className={styles.fieldTheme}>
                            <label className={styles.labelMail}>Treść</label>
                            <p className={styles.dataMail}>{issue.issue_description}</p>
                        </div>
                        <div className={styles.fieldTheme}>
                            <label className={styles.labelMail}>Odpowiedź</label>
                            <p className={styles.dataMail}>{issue.resolution_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Odpowiedź