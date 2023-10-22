import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/auth"
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("token", res.data)
            window.location = "/"
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <div className={styles.pageContainer}>
            <div className={styles.banner}>
                <div className={styles.bannerName}>
                    <h2 className={styles.Name}>Logowanie</h2>
                </div>
            </div>

            <div className={styles.login_container}>
                <div className={styles.nameContainer}>
                    <h1 className={styles.loginName}>Logowanie do sytemu mieszkańca akademiku</h1>
                </div>
                <div className={styles.login_form_container}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={data.email}
                                    required
                                    className={styles.input}
                                />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                                className={styles.input}
                            />
                        </div>
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <div className={styles.left}>
                            <button type="submit" className={styles.button}>
                                Zaloguj się
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

                        <div className={styles.right}>
                            <div className={styles.rightName}>
                                <p> Nowy w systemie?</p>
                            </div>
                            <div className={styles.rightButton}>
                                <Link to="/form">
                                <button type="button" className={styles.buttonRight}>
                                    Złóż wniosek
                                    <svg
                                        className={styles.vectorRight}
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
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;
