import styles from "./styles.module.css"
import React from "react"

const Message = ({user}) => {
    
    return (
        <div className={styles.pageContainer}>
            <div className={styles.messageContainer}>
                <div className={styles.messageContent}>
                    <div className={styles.messageHead}>
                        <h2 className={styles.signName}>Zgłoszenie do opiekuna</h2>
                    </div>

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

                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Temat zgłoszenia</label>
                            <input
                                type="text"
                                name="message"
                                required
                                className={styles.inputTemat}
                            />
                    </div>

                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Dzień dobry...</label>
                            <textarea
                                type="text"
                                name="message"
                                required
                                className={styles.inputMessage}
                            />
                    </div>

                    <button type="submit" className={styles.button}>
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
                </div>
            </div>
        </div>
    );
};
export default Message

