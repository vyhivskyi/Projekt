import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const Preference = ({ user }) => {
    const handleEdit = async () => {
        window.location = '/profile/preference/edit'
    }
    
    return (
        <div className={styles.pageContainer}>
            <div className={styles.prefContainer}>
                <div className={styles.prefContent}>
                    <div className={styles.prefHead}>
                        <h2 className={styles.signName}>Preferencje pokoju/składu</h2>
                    </div>

                    <div className={styles.prefFieldRow}>
                        <div className={styles.prefField}>
                            <label className={styles.label}>Imię</label>
                            <p className={styles.data}>{user.first_name}</p>
                        </div>

                        <div className={styles.prefField}>
                            <label className={styles.label}>Nazwisko</label>
                            <p className={styles.data}>{user.last_name}</p>
                        </div>
                    </div>

                    <div className={styles.prefFieldRow}>
                        <div className={styles.prefField}>
                            <label className={styles.label}>Preferowany DS</label>
                            <p className={styles.data}>{user.preference.ds}</p>
                        </div>

                        <div className={styles.prefField}>
                            <label className={styles.label}>Preferowany pokój</label>
                            <p className={styles.data}>{user.preference.room}</p>
                        </div>
                    </div>

                    <div className={styles.prefField}>
                        <label className={styles.label}>Preferowany skład</label>
                        <p className={styles.data}>{user.preference.users}</p>
                    </div>
                </div>

                <Link to="/profile/preference/edit" className={styles.nonLinked}>
                    <div className={styles.formContainer2}>
                        <button type="submit" className={styles.button} onClick={handleEdit}>
                            Edytuj
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
            </Link>
            </div>
        </div>


    );
}
export default Preference