import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { UilTrashAlt } from '@iconscout/react-unicons'

const Status = ({ user }) => {
    const [status, setStatus] = useState("W trakcie weryfikacji...");

    useEffect(() => {
        // Pobierz token JWT z odpowiedniego miejsca, gdzie jest dostępny (np. z localStorage, sessionStorage itp.).
        const token = localStorage.getItem("token"); // Załóżmy, że token jest przechowywany w localStorage.

        // Przykładowe zapytanie do API, zakładając, że API zwraca status wniosku.
        axios.get("http://localhost:8080/api/profile/status", {
            headers: { 'Content-Type': 'application/json', 'x-access-token': token },
        })
            .then((response) => {
                const statusResponse = response.data.status; // Przyjmując, że API zwraca status w formie tekstu
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
                        window.location.reload()
                    }
                }
            }
        }
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.roomContainer}>
                <div className={styles.roomContent}>
                    <div className={styles.roomHead}>
                        <h2 className={styles.signName}>Dziękujemy za wypełnienie wniosku</h2>
                    </div>

                    <div className={styles.statusContainer}>
                        <div className={styles.statusField}>
                            <div className={styles.statusInfo}>
                                <h2 className={styles.statusText}>{statusLabel} {getStatusInPolish(status)}</h2>
                            </div>
                        </div>
                    </div>
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
