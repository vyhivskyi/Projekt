import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Akademiki = () => {
  const navigate = useNavigate();

  const handleErrorClick = () => {
    navigate('/404');
  };

  const handleDS2Click =() => {
    navigate('/DS2/Korytarz')
  }

  const handleDS3Click =() => {
    navigate('/DS3/Korytarz')
  }

  const handleDS4Click =() => {
    navigate('/DS4/Korytarz')
  }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
          <div className={styles.bannerName}>
              <h2 className={styles.Name}>Akademiki</h2>
          </div>
      </div>

      <div className={styles.akademikiContainer}>
        <div className={styles.heading}>
          <h2 className={styles.headingText}>Nasze akademiki</h2>
        </div>
        <div className={styles.akademik}>
          <div className={styles.image}></div>
          <div className={styles.content}>
            <h1 className={styles.number}>01</h1>
            <h2 className={styles.name}>Dom Studenta №1</h2>
            <button className={styles.button} onClick={handleErrorClick}>
              Więcej
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
        </div>

        <div className={styles.akademik}>
          <div className={styles.content}>
            <h1 className={styles.number}>02</h1>
            <h2 className={styles.name}>Dom Studenta №2</h2>
            <button className={styles.button} onClick={handleDS2Click}>
              Więcej
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
          <div className={styles.image}></div>
        </div>

        <div className={styles.akademik}>
          <div className={styles.image}></div>
          <div className={styles.content}>
            <h1 className={styles.number}>03</h1>
            <h2 className={styles.name}>Dom Studenta №3</h2>
            <button className={styles.button} onClick={handleDS3Click}>
              Więcej
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
        </div>

        <div className={styles.akademik}>
          <div className={styles.content}>
            <h1 className={styles.number}>04</h1>
            <h2 className={styles.name}>Dom Studenta №4</h2>
            <button className={styles.button} onClick={handleDS4Click}>
              Więcej
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
          <div className={styles.image}></div>
        </div>
          
        </div>
      </div>
  );
};



export default Akademiki;
