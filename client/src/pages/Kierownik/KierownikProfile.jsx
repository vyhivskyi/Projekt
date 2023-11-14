import styles from "./styles.module.css"
import React from "react"
import axios from "axios"
import { UilFileDownloadAlt, UilFastMail, UilListOl, UilBed, UilEnvelopeCheck } from '@iconscout/react-unicons'
import { Link } from "react-router-dom"

const Kierownik = ({ setDane, user }) => {
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
            </div>
            <div className={styles.navContainer}>
                <nav className={styles.navbar}>
                    <div className={styles.contentNav}>
                        <Link to="/kierownik" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilFileDownloadAlt className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Moje dane
                                </div>
                            </button>
                        </Link>
                        <Link to="/kierownik/wnioski" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilEnvelopeCheck className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Lista wniosków
                                </div>
                            </button>
                        </Link>
                        <Link to="/kierownik/studenci" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilListOl className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Lista studentów
                                </div>
                            </button>
                        </Link>
                        <Link to="/kierownik/płatności" className={styles.nonLinkText}>
                            <button className={styles.navBtn} onClick={handleProfile}>
                                <div className={styles.iconBack}>
                                    <UilFastMail className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Płatności
                                </div>
                            </button>
                        </Link>
                        <Link to="/kierownik/pokoje" className={styles.nonLinkText}>
                            {/*zmieniłem handleProfile na handleRoom w metodzie onClick*/}
                            <button className={styles.navBtn} onClick={handleRoom}>
                                <div className={styles.iconBack}>
                                    <UilBed className={styles.iconWniosek}/>
                                </div>
                                <div className={styles.iconText}>
                                    Pokoje
                                </div>
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Kierownik