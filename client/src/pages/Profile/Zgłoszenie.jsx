import styles from "./styles.module.css"
import React from "react"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Message = ({ user }) => {
    const [data, setData] = useState({
        user_id: user._id,
        issue_thema: "",
        issue_description: ""
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
                const url = "http://localhost:8080/api/profile/issue"
                const { data: res } = await axios.post(url, data)
                    .then((res) => {
                        navigate("/profile/zgłoszenie/odpowiedzi");
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
            <div className={styles.messageContainer}>
                <div className={styles.messageContent}>
                    <div className={styles.messFieldRow}>
                        <div className={styles.messField}>
                            <label className={styles.label}>Imię</label>
                            <p className={styles.data}>{user.first_name}</p>
                        </div>

                        <div className={styles.messField}>
                            <label className={styles.label}>Nazwisko</label>
                            <p className={styles.data}>{user.last_name}</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Temat zgłoszenia</label>
                            <input
                                type="text"
                                name="issue_thema"
                                onChange={handleChange}
                                required
                                className={styles.inputTemat}
                            />
                        </div>

                        <div className={styles.inputContainerText}>
                            <label className={styles.label}>Dzień dobry...</label>
                            <textarea
                                type="text"
                                name="issue_description"
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
    );
};
export default Message

