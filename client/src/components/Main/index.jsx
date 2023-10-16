import styles from "./styles.module.css"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, Navigate } from "react-router-dom"

const Main = ({ setDane, setMessage }) => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }
    const handleMain = () => {
        window.location = "/"
    }
    const handleLogin = () => {
        window.location = "/login"
    }
    /*const handleProfile = () => {
        window.location = "/profile"
    }*/
    useEffect(() => {
        handleProfile();
      }, []);
    const handleProfile = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:8080/api/profile',
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                }
                const { data: res } = await axios(config)
                setDane(res.data);
                setMessage(res.message);
                localStorage.setItem("message", res.message);
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    localStorage.removeItem("token")
                    window.location.reload()
                }
            }
        }
    }
    //const isLoggedIn = !!localStorage.getItem("token");
    const isLoggedOut = !localStorage.getItem("token");
    return (
        <div className={styles.main_container}>
            <div>
                <h1>System elektronicznego kwaterowania studentów</h1>
            </div>
            {localStorage.getItem("token") ? ( <nav className={styles.navbar}>
                <Link to="/">
                    <button className={styles.white_btn} onClick={handleMain}>
                        Strona główna
                    </button>
                </Link>
                <Link to="/profile">
                    <button className={styles.white_btn} onClick={handleProfile}>
                        Profil
                    </button>
                </Link>
                <button type="button" className={styles.white_btn} onClick={handleLogout}>
                    Wyloguj się
                </button>
            </nav>
            ):(<nav className={styles.navbar}>
                <Link to="/">
                    <button className={styles.white_btn} onClick={handleMain}>
                        Strona główna
                    </button>
                </Link>
                <Link to="/login">
                    <button className={styles.white_btn} onClick={handleLogin}>
                        Zaloguj się
                    </button>
                </Link>
            </nav>)}
            {isLoggedOut && 
            <div className={styles.btn_container}>
            <Link to="/form">
                <button className={styles.btn} onClick={handleProfile}>
                    Złóż wniosek
                </button>
            </Link>
            </div>}
            
        </div >
    )
}
export default Main