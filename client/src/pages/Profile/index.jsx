import styles from "./styles.module.css"
import React from "react"
import axios from "axios"
import { UilFileDownloadAlt, UilFastMail, UilLocationArrow, UilBed, UilFavorite, UilTrashAlt, UilMoneyStack } from '@iconscout/react-unicons'
import { Link } from "react-router-dom"

const Profile = ({ setDane, user }) => {
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
    //działa pobieranie informacji o pokoju studenta, należy tylko przesłać dane do strony Pokój
    const handleRoom = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:8080/api/profile/room',
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                }
                const { room: res } = await axios(config)
                setRoom(res.room);
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    //localStorage.removeItem("token")
                    window.location.reload()
                }
            }
        }
    }
    return (
        <div className={styles.main_container}>
            <div className={styles.headSystem}>
                <div className={styles.headUser}>
                    {user && (
                        <h3 className={styles.headUserName}>{user.first_name} {user.last_name}</h3>
                    )}
                </div>
                <div className={styles.headUserPhoto}>
                    {user && (
                        <img
                        src={`http://localhost:8080/uploads/${user.profile_picture}`}
                        alt="Profile Picture"
                        className={styles.userPhoto}
                    />
                    )}
                    
                </div>
            </div>
            <div className={styles.navContainer}>
                <nav className={styles.navbar}>
                    <div className={styles.contentNav}>
                        <Link to="/profile" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilFileDownloadAlt className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Status wniosku
                                </div>
                            </button>
                        </Link>
                        <Link to="/profile/zgłoszenie" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilFastMail className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Zgłoszenie
                                </div>
                            </button>
                        </Link>
                        <Link to="/profile/wymeldowanie" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilLocationArrow className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Wymeldowanie
                                </div>
                            </button>
                        </Link>
                        <Link to="/profile/pokój" className={styles.nonLinkText}>
                            {/*zmieniłem handleProfile na handleRoom w metodzie onClick*/}
                            <button className={styles.navBtn} onClick={handleRoom}>
                                <div className={styles.iconBack}>
                                    <UilBed className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Pokój
                                </div>
                            </button>
                        </Link>
                        <Link to="/profile/preference" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilFavorite className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Preferencje
                                </div>
                            </button>
                        </Link>
                        <button className={styles.navBtn} onClick={handleDelete}>
                            <div className={styles.iconBack}>
                                <UilTrashAlt className={styles.iconWniosek}/>
                            </div>
                            <div className={styles.iconText}>
                                Usuń konto
                            </div>
                        </button>
                    </div>
                </nav>

                {/*Konto do opłat*/}
                <nav className={styles.navbarKonto}>
                    <div className={styles.contentKonto}>
                        <div className={styles.nameKonto}>
                            <h2 className={styles.nameField}>Konto do opłat</h2>
                        </div>
                        <div className={styles.btnKonto}>
                            <div className={styles.iconBackKonto}>
                                <UilMoneyStack className={styles.iconKonto}/>
                            </div>
                            <div className={styles.iconTextKonto}>
                                456789123
                            </div>
                        </div>
                        <div className={styles.nameKonto}>
                            <h2 className={styles.nameField}>Zadłużenie</h2>
                        </div>
                        <div className={styles.btnDebt}>
                            <div className={styles.iconBackKonto}>
                                <UilMoneyStack className={styles.iconKonto}/>
                            </div>
                            <div className={styles.iconTextKonto}>
                                0 zł
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Profile