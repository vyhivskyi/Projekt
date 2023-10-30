import styles from "./styles.module.css"
import React from "react"

const CheckOut = ({user}) => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.checkoutContainer}>
                <div className={styles.checkoutContent}>
                    <div className={styles.checkoutHead}>
                        <h2 className={styles.signName}>Wymeldowanie</h2>
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
                        <label className={styles.label}>Data wymeldowania</label>
                        <div className={styles.dateInputContainer}>
                            <input
                                type="date"
                                name="date_of_checkout"
                                required
                                className={styles.input}
                                id="dateInput"
                            />
                            <i className="fas fa-calendar"></i>
                        </div>
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
export default CheckOut

