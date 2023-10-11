import styles from "./styles.module.css"
import React, { useState } from "react"
import axios from "axios"
import { Link, Navigate } from "react-router-dom"

const Profile = ({ setDane }) => {
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
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    localStorage.removeItem("token")
                    window.location.reload()
                }
            }
        }
    }
    const handleDelete = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            const confirmed = window.confirm("Czy na pewno chcesz usunąć konto?");

            if (confirmed) {
                try {
                    const config = {
                        method: 'get',
                        url: 'http://localhost:8080/api/profile/delete',
                        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                    }
                    await axios(config);
                    localStorage.removeItem("token")
                    window.location.reload();
                } catch (error) {
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                        localStorage.removeItem("token")
                        window.location.reload()
                    }
                }
            }
        }
    }
    return (
        <div className={styles.main_container}>
            <div>
                <nav className={styles.navbar}>
                    <Link to="/profile">
                        <button className={styles.white_btn} onClick={handleProfile}>
                            Dane studenta
                        </button>
                    </Link>
                    <Link to="/profile/preference">
                        <button className={styles.white_btn} onClick={handleProfile}>
                            Preferencje
                        </button>
                    </Link>
                    <button type="button" className={styles.white_btn} onClick={handleDelete}>
                        Usuń konto
                    </button>
                </nav>
            </div >
        </div>
    )
}
export default Profile