import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ZgloszeniaDetails = () => {
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
    const [data, setData] = useState({
        resolution_description: ""
    });
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const config = {
                    method: 'put',
                    url: `http://localhost:8080/api/profile/issue/answers/${issueId}`,
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                }
                const url = `http://localhost:8080/api/profile/issue/answers/${issueId}`
                const { data: res } = await axios.put(url, data, {
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token },
                })
                //const { data: res } = await axios(config)
                    .then((res) => {
                        navigate("/portiernia/zgłoszenia");
                        console.log(res.message);
                        console.log(data);
                    })
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    console.log(data)
                }
            }
        }
    }
    return (
        <div className={styles.pageContainer}>
            <div className={styles.daneLista}>
                <div className={styles.contentLista}>
                    <div className={styles.nameContainerCheck}>
                        <h1 className={styles.signName}>Informacja zwrotna</h1>
                    </div>
                    <div className={styles.fieldsTheme}>
                        <div className={styles.messField}>
                            <label className={styles.label}>Temat</label>
                            <p className={styles.data}>{issue.issue_thema}</p>
                        </div>
                        <div className={styles.messField}>
                            <label className={styles.label}>Treść</label>
                            <p className={styles.data}>{issue.issue_description}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputContainerText}>
                                <label className={styles.label}>Odpowiedź</label>
                                <textarea
                                    type="text"
                                    name="resolution_description"
                                    onChange={handleChange}
                                    required
                                    className={styles.inputMessage}
                                />
                            </div>
                            <button type="submit" className={styles.buttonMess}>
                                Wyślij
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
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
};
export default ZgloszeniaDetails