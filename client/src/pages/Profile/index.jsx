import styles from "./styles.module.css"
import React from "react"
import axios from "axios"
import { UilFileDownloadAlt, UilFastMail, UilLocationArrow, UilBed, UilFavorite, UilTrashAlt, UilMoneyStack, UilSpinnerAlt, UilInvoice } from '@iconscout/react-unicons'
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
                //należy to odkomentować
                //setRoom(res.room);
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
                                    Moje dane
                                </div>
                            </button>
                        </Link>
                        <Link to="/profile/status" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilSpinnerAlt className={styles.iconWniosek}/>
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
                        <Link to="/profile/płatności" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilInvoice className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Płatności
                                </div>
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Profile