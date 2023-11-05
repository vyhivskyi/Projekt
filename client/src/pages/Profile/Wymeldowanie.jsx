import styles from "./styles.module.css"
import { useState, React } from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";
const CheckOut = ({ user }) => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        user_id: user._id,
        //tutaj należy dodać room._id
        room_id: "65479522eef513e0656e261f",
        checkout_date: "",
        //również należy dodać pole w formularzu z uwagami
        remarks: ""
    })
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const url = "http://localhost:8080/api/profile/checkout"
                const { data: res } = await axios.post(url, data)
                .then((res) => {
                    navigate("/profile");
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
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Data wymeldowania</label>
                            <div className={styles.dateInputContainer}>
                                <input
                                    type="date"
                                    name="checkout_date"
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    id="dateInput"
                                />
                                <i className="fas fa-calendar"></i>
                            </div>
                        </div>

                        <button type="submit" className={styles.button} >
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
export default CheckOut

