import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const Preference = ({ user }) => {
    const handleEdit = async () => {
        
        window.location = '/profile/preference/edit'
    }
    
    return (
        <div className={styles.pref}>
            <h3 className={styles.name}>{user.first_name} {user.last_name}</h3>

            <div className={styles.field}>
                <div className={styles.info}>
                    <p className={styles.opis}>Preferowany DS:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.preference.ds}</p>
                </div>
            </div>

            <div className={styles.field}>
                <div className={styles.info}>
                    <p className={styles.opis}>Preferowany pokój:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.preference.room}</p>
                </div>
            </div>

            <div className={styles.field}>
                <div className={styles.info}>
                    <p className={styles.opis}>Preferowany skład:</p>
                </div>
                <div className={styles.fields}>
                    <p className={styles.data}>{user.preference.users}</p>
                </div>
            </div>
            <Link to="/profile/preference/edit">
                <div className={styles.formContainer2}>
                <button className={styles.btn} onClick={handleEdit}>
                    Edytuj
                </button>
                </div>
            </Link>
        </div>


    );
}
export default Preference