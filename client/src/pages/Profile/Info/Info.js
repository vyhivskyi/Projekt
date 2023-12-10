import styles from "./styles.module.css"
const Info = ({user}) => {
    const formattedDate = new Date(user.date_of_birthday).toLocaleDateString();
    console.log("Image URL:", `http://localhost:8080/uploads/${user.profile_picture}`);

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

                    <div className={styles.fieldRow}>
                        <div className={styles.field}>
                            <label className={styles.label}>Data urodzenia</label>
                            <p className={styles.data}>{formattedDate}</p>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Płeć</label>
                            <p className={styles.data}>{user.gender}</p>
                        </div>
                    </div>

                    <div className={styles.fieldMail}>
                        <label className={styles.labelMail}>Email</label>
                        <p className={styles.dataMail}>{user.email}</p>
                    </div>

                    <div className={styles.fieldRow}>
                        <div className={styles.field}>
                            <label className={styles.label}>Wydział</label>
                            <p className={styles.data}>{user.faculty}</p>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Kierunek</label>
                            <p className={styles.data}>{user.department}</p>
                        </div>
                    </div>

                    <div className={styles.fieldRow}>
                        <div className={styles.field}>
                            <label className={styles.label}>Rok studiów</label>
                            <p className={styles.data}>{user.year_of_study}</p>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Index</label>
                            <p className={styles.data}>{user.student_id}</p>
                        </div>
                    </div>

                    <div className={styles.fieldPhoto}>
                        <label className={styles.labelPhoto}>Profilowe zdjęcie</label>
                        <img
                            src={`http://localhost:8080/uploads/${user.profile_picture}`}
                            alt="Profile Picture"
                            className={styles.profilePicture}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info