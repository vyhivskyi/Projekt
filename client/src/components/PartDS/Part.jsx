import React from 'react';
import styles from './styles.module.css';
import { useLocation, Link } from 'react-router-dom';

const Part = () => {
    const location = useLocation();
    const { pathname } = location;
    const excludedPath = '/404';

    if (pathname === excludedPath) {
    return null; 
  }
    return (
        <div className={styles.pageContainer}>
            {/*Link do wniosku*/}
            <div className={styles.containerWniosek}>
                <div className={styles.containerPart}>
                    <div className={styles.containerContent}>
                        <h1 className={styles.contentText}>Chcesz stać się częścią naszego studenckiego miasteczka?</h1>
                        <Link to="/form">
                            <button className={styles.buttonOverlay}>
                            Wypełnij
                            <svg
                                className={styles.vectorIcon}
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
            </div>
        </div>
    );
};

export default Part;