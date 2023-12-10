import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import styles from "./styles.module.css";
import { UilTrashAlt } from '@iconscout/react-unicons'

const Status = ({ user }) => {
    const [status, setStatus] = useState("W trakcie weryfikacji...");

    useEffect(() => {
        const token = localStorage.getItem("token"); 
        axios.get("http://localhost:8080/api/profile/status", {
            headers: { 'Content-Type': 'application/json', 'x-access-token': token },
        })
            .then((response) => {
                const statusResponse = response.data.status; 
                setStatus(statusResponse);
            })
            .catch((error) => {
                console.error("Error fetching status:", error);
                setStatus("Błąd podczas pobierania statusu");
            });
    }, []);
    const getStatusInPolish = (status) => {
        switch (status) {
            case "Submitted":
                return "W trakcie rozpatrywania";
            case "Approved":
                return "Zaakceptowany";
            case "Rejected":
                return "Odrzucony";
            default:
                return "Nieznany";
        }
    };

    const statusLabel = "Status:";

    const handleDelete = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            const confirmed = window.confirm("Czy na pewno chcesz usunąć konto?");

            if (confirmed) {
                try {
                    const config = {
                        method: 'get',
                        url: 'http://localhost:8080/api/profile/delete',
                        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                    }
                    await axios(config);
                    localStorage.removeItem("token")
                    window.location.reload();
                } catch (error) {
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                        localStorage.removeItem("token")
                    }
                }
            }
        }
    }
    const handleEdit = async () => {
        window.location = '/profile/preference/edit'
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.statusBlock}>
                <div className={styles.statusContent}>
                    <div className={styles.statusHead}>
                        <h2 className={styles.statusName}>Dziękujemy za wypełnienie wniosku</h2>
                    </div>

                    <div className={styles.statusContainer}>
                        <div className={styles.statusField}>
                            <div className={styles.statusInfo}>
                                <h2 className={styles.statusText}>{statusLabel} {getStatusInPolish(status)}</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.prefFieldRow}>
                        <div className={styles.prefField}>
                            <label className={styles.label}>Preferowany DS</label>
                            <p className={styles.data}>{user.preference.ds}</p>
                        </div>

                        <div className={styles.prefField}>
                            <label className={styles.label}>Preferowany pokój</label>
                            <p className={styles.data}>{user.preference.room}</p>
                        </div>
                    </div>

                    <div className={styles.prefFieldPeople}>
                        <label className={styles.label}>Preferowany skład</label>
                        <p className={styles.data}>{user.preference.users}</p>
                    </div>

                    <Link to="/profile/preference/edit" className={styles.nonLinked}>
                        <div className={styles.buttonBlock}>
                            <button type="submit" className={styles.button} onClick={handleEdit}>
                                Edytuj
                                <svg
                                    className={styles.vector}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 17">
                                    <path
                                        d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                        strokeWidth="2"
                                        strokeLinecap="square"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <div className={styles.delete}>
                        <button className={styles.navBtn} onClick={handleDelete}>
                            <div className={styles.iconBack}>
                                <UilTrashAlt className={styles.iconWniosek}/>
                            </div>
                            <div className={styles.iconText}>
                                Usuń wniosek
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Status;
