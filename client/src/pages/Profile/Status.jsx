import styles from "./styles.module.css"
import React from "react"

const Status = ({ user}) => {
    //należy dopisać metodę, która w zależności od typu pokoju ustawia cenę
    return (
        <div className={styles.pageContainer}>
            <div className={styles.roomContainer}>
                <div className={styles.roomContent}>
                    <div className={styles.roomHead}>
                        <h2 className={styles.signName}>Dziękujemy za wypełnienie wniosku</h2>
                    </div>

                    <div className={styles.statusContainer}>
                        <div className={styles.statusField}>
                            <button type="submit" className={styles.buttonStatus}>
                                Status wniosku
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

                        <div className={styles.statusField}>
                            <div className={styles.statusInfo}>
                                <h2 className={styles.statusText}>W trakcie weryfikacji...</h2>
                            </div>
                        </div>
                    </div>

                    <div className={styles.historyContentStatus}>
                        <div className={styles.historyHeadStatus}>
                            <p className={styles.headText}>Historia wniosków</p>
                        </div>
                        
                        <div className={styles.historyTextStatus}>
                            <div className={styles.historyRowStatus}>
                                <p className={styles.historyYear}>28.06.2022</p>
                            </div>

                            <div className={styles.historyRowStatus}>
                                <p className={styles.historyYear}>28.06.2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Status

