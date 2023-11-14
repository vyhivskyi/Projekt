import styles from "./styles.module.css"
const KierownikInfo = ({ user }) => {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.dane}>
                <div className={styles.content}>
                    <div className={styles.nameContainer}>
                        <h1 className={styles.signName}>Moje dane</h1>
                    </div>
                    <div className={styles.fieldRow}>
                        <div className={styles.field}>
                            <label className={styles.label}>Imię</label>
                            <p className={styles.data}>{user.first_name}</p>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Nazwisko</label>
                            <p className={styles.data}>{user.last_name}</p>
                        </div>
                    </div>

                    <div className={styles.fieldMail}>
                        <label className={styles.labelMail}>Email</label>
                        <p className={styles.dataMail}>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KierownikInfo