import styles from "./styles.module.css"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import logoImage from './images/logo_size.png'

const Main = ({ setDane, setMessage }) => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }
    const [userRole, setUserRole] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios
            .get("http://localhost:8080/api/profile", {
                headers: { 'Content-Type': 'application/json', 'x-access-token': token },
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error("Błąd pobierania danych użytkownika");
                }
                return response.data;
            })
            .then((data) => {
                setUserRole(data.data.role);
            })
            .catch((error) => {
                console.error("Błąd pobierania roli użytkownika: ", error);
            });
    }, []);
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

    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        const navItems = document.querySelector(`.${styles.navItems}`);
        navItems.classList.toggle(styles.showDropdown);
      };
      

    const getProfileLink = () => {
        if (userRole === "Student") {
          return "/profile";
        } else if (userRole === "Opiekun") {
          return "/portiernia";
        } else if (userRole === "Kierownik") {
          return "/kierownik";
        } else {
          return "/";
        }
      };
    //const isLoggedIn = !!localStorage.getItem("token");
    //const isLoggedOut = !localStorage.getItem("token");
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        // Save the theme preference to localStorage if you want to persist it
        localStorage.setItem('theme', newTheme);
      };
      useEffect(() => {
        // Load theme preference from localStorage on component mount
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }, []);
    return (
        <div className={`${styles.pageContainer} ${styles[theme]}`}>
            <nav className={`${styles.navbar} ${styles[theme]}`}>
                <div className={styles.logoContainer}>
                    <img src={logoImage} alt="Logo" className={styles.logo} />
                </div>
                <div className={styles.menuIcon} onClick={handleToggleDropdown}>
                    ☰
                </div>
                
                <div className={`${styles.navItems} ${showDropdown ? styles.showDropdown : ''} ${styles[theme]}`}>
                    {localStorage.getItem("token") ? (
                        <>
                        <Link to="/" className={`${styles.navItem} ${styles[theme]}`}>
                            Strona główna
                        </Link>
                        <Link to="/akademiki" className={styles.navItem}>
                            Akademiki
                        </Link>
                        <Link to="/Cennik" className={styles.navItem}>
                            Cennik
                        </Link>
                        <Link to="/dokumenty" className={styles.navItem}>
                            Dokumenty
                        </Link>
                        <Link to="/kontakt" className={styles.navItem}>
                            Kontakt
                        </Link>
                        <Link to="/dostepnosc" className={styles.navItem} onClick={handleLogout}>
                            Wyloguj się
                        </Link>
                        <Link to={getProfileLink()} className={styles.navItem}>
                            Profil
                        </Link>
                        <button className={styles.themeToggle} onClick={toggleTheme}>
                            <span role="img" aria-label="Toggle Theme">
                                {theme === 'light' ? '🌞' : '🌙'}
                            </span>
                        </button>
                    </>
                    ) : (
                        <>
                            <Link to="/" className={styles.navItem}>
                                Strona główna
                            </Link>
                            <Link to="/akademiki" className={styles.navItem}>
                                Akademiki
                            </Link>
                            <Link to="/Cennik" className={styles.navItem}>
                                Cennik
                            </Link>
                            <Link to="/dokumenty" className={styles.navItem}>
                                Dokumenty
                            </Link>
                            <Link to="/kontakt" className={styles.navItem}>
                                Kontakt
                            </Link>
                            <Link to="/login" className={styles.navItem}>
                                Logowanie
                            </Link>
                            <button className={styles.themeToggle} onClick={toggleTheme}>
                                <span role="img" aria-label="Toggle Theme">
                                    {theme === 'light' ? '🌞' : '🌙'}
                                </span>
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </div >
    );
}
export default Main