import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/Logo.png'
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles.pageContainer}>
    <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
            <img src={logoImage} alt="Logo" className={styles.logo} />
            <span className={styles.logoText}>DS POLLUB</span>
        </div>
        <Link to="/" className={styles.navItem}>
            Strona główna
        </Link>
        <Link to="/akademiki" className={styles.navItem}>
            Akademiki
        </Link>
        <Link to="/dokumenty" className={styles.navItem}>
            Dokumenty
        </Link>
        <Link to="/kontakt" className={styles.navItem}>
            Kontakt
        </Link>
        <Link to="/logowanie" className={styles.navItem}>
            Logowanie
        </Link>
        <Link to="/dostepnosc" className={styles.navItem}>
            Dostępność
        </Link>
    </nav>
    </div>
  );
};

export default Navbar;
