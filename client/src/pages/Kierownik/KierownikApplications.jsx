import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const KierownikApplications = () => {
    const [applications, setApplications] = useState([]);
    const [students, setStudents] = useState([]);
    const [filterStatus, setFilterStatus] = useState("All");
    const [searchName, setSearchName] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const applicationsResponse = await axios.get("http://localhost:8080/api/kierownik/applications");
                const studentsResponse = await axios.get("http://localhost:8080/api/users/students");

                const applicationsData = applicationsResponse.data;
                const studentsData = studentsResponse.data;

                setApplications(applicationsData);
                setStudents(studentsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
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

    const formatRemarks = (remarks) => {
        return remarks || "Brak uwag";
    };

    const getUserFullName = (userId) => {
        const user = students.find((student) => student._id === userId);
        return user ? `${user.first_name} ${user.last_name}` : "Nieznany użytkownik";
    };

    const filteredApplications = applications.filter((application) => {
        if (filterStatus === "All" || application.status === filterStatus) {
            if (searchName === "") {
                return true; 
            } else {
                const fullName = getUserFullName(application.user_id).toLowerCase();
                const searchLower = searchName.toLowerCase();
                return fullName.includes(searchLower);
            }
        }
        return false;
    });

    return (
        <div className={styles.pageContainer}>
            <div className={styles.daneLista}>
                <div className={styles.contentLista}>
                    <div className={styles.nameContainerLista}>
                        <h1 className={styles.signName}>Lista Wniosków</h1>
                    </div>
                    <div className={styles.filterContainer}>
                        <div className={styles.inputContainer}>
                            <div className={styles.statusSelect}>
                                <select onChange={(e) => setFilterStatus(e.target.value)} className={styles.select}>
                                    <option value="All">Wszystkie</option>
                                    <option value="Submitted">W trakcie rozpatrywania</option>
                                    <option value="Approved">Zaakceptowany</option>
                                    <option value="Rejected">Odrzucony</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="Szukaj studenta..."
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                className={styles.inputSearch}
                            />
                        </div>
                    </div>
                    <div className={styles.applicationsContainer}>
                        {filteredApplications.map((application, index) => (
                            <div key={application._id} className={styles.applicationBlock}>
                                <p className={styles.applicationText}>
                                    Użytkownik:{" "}
                                    <Link to={`/details/${application.user_id}`}>
                                        {getUserFullName(application.user_id)}
                                    </Link>
                                    <br />
                                    Data Wniosku: {new Date(application.application_date).toLocaleDateString()}
                                    <br />
                                    Status: {getStatusInPolish(application.status)}
                                    <br />
                                    Uwagi: {formatRemarks(application.remarks)}
                                    <br />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KierownikApplications;
