import styles from "./styles.module.css"
const Info = ({user}) => {
    const formattedDate = new Date(user.date_of_birthday).toLocaleDateString();
    return (
        <div className={styles.dane}>
            <h3 className={styles.name}>{user.first_name} {user.last_name}</h3>

            <div className={styles.field}>
                <div className={styles.fieldName}>
                    <p className={styles.opis}>Email:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.email}</p>
                </div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>
                    <p className={styles.opis}>Data urodzenia:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{formattedDate}</p>
                </div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>
                    <p className={styles.opis}>Płeć:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.gender}</p>
                </div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>
                    <p className={styles.opis}>Wydział:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.faculty}</p>
                </div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>
                    <p className={styles.opis}>Kierunek:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.department}</p>
                </div>
            </div>
            <div className={styles.field}>
                <div className={styles.fieldName}>
                    <p className={styles.opis}>Rok studiów:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.year_of_study}</p>
                </div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>
                    <p className={styles.opis}>Index:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.student_id}</p>
                </div>
            </div>

            
      </div>
    );
}

export default Info