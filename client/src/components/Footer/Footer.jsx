import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import logoImage from './images/Logo.png'
import instagramIcon from './images/instagram.png'; // Replace with your Instagram icon image
import facebookIcon from './images/facebook.png'; // Replace with your TikTok icon image

const Footer = () => {
    const location = useLocation();
    const { pathname } = location;
    const excludedPath = '/404';

    if (pathname === excludedPath) {
    return null; 
  }
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.content}>
                <div className={styles.leftSection}>
                    <div className={styles.logoContainer}>
                        <img src={logoImage} alt="Logo" className={styles.logo} />
                        <span className={styles.logoText}>DS POLLUB</span>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
                        </a>
                    </div>
                </div>
        
                <div className={styles.centralSection}>
                    <div className={styles.pageLinks}>
                        <p className={styles.pagesHeader}>Strony</p>
                        <Link to="/" className={styles.page}>
                            Strona główna
                        </Link>
                        <Link to="/akademiki" className={styles.page}>
                            Akademiki
                        </Link>
                        <Link to="/dokumenty" className={styles.page}>
                            Dokumenty
                        </Link>
                        <Link to="/kontakt" className={styles.page}>
                            Kontakt
                        </Link>
                        <Link to="/logowanie" className={styles.page}>
                            Logowanie
                        </Link>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.contacts}>
                        <p className={styles.pagesHeader}>Kontakt</p>
                        <p className={styles.contactHeader}>Kierownik zespołu A:</p>
                        <p className={styles.kontakt}>Barbara Pawłowska</p>
                        <p className={styles.kontakt}>(+81) 538 45 55</p>
                        <p className={styles.contactHeader}>Kierownik zespołu B:</p>
                        <p className={styles.kontakt}>Ewa Derda</p>
                        <p className={styles.kontakt}>(+81) 538 45 57</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.copyright}>
            <p>&copy; DS Pollub</p>
            
        </div>
    </footer>
  );
};

export default Footer;