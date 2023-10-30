import styles from "./styles.module.css"
import React from "react"

const Room = ({user}) => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.roomContainer}>
                <div className={styles.roomContent}>
                    <div className={styles.roomHead}>
                        <h2 className={styles.signName}>Informacje o pokoju</h2>
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

                    <div className={styles.messFieldRow}>
                        <div className={styles.messField}>
                            <label className={styles.label}>Nr pokoju</label>
                            <p className={styles.data}>{user.first_name}</p>
                        </div>

                        <div className={styles.messField}>
                            <label className={styles.label}>Kwota</label>
                            <p className={styles.data}>{user.last_name}</p>
                        </div>
                    </div>

                    <div className={styles.historyContent}>
                        <div className={styles.historyHead}>
                            <p className={styles.headText}>Historia kwaterowania</p>
                        </div>
                        
                        <div className={styles.historyText}>
                            <div className={styles.historyRow}>
                                <p className={styles.historyYear}>2021/2022</p>
                                <p className={styles.historyRoom}>123</p>
                            </div>

                            <div className={styles.historyRow}>
                                <p className={styles.historyYear}>2022/2023</p>
                                <p className={styles.historyRoom}>123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Room

