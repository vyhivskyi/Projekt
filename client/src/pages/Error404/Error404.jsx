import React from 'react';
import styles from './styles.module.css';

const Error404 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.number}>404:(</h1>
            <h2 className={styles.name}>Przepraszamy, ta strona jest niedostępna z powodu remontu DS1</h2>
            <button className={styles.button} onMouseEnter={() => document.querySelector(`.${styles.content}`).classList.add(styles.hovered)} onMouseLeave={() => document.querySelector(`.${styles.content}`).classList.remove(styles.hovered)}>
              Strona główna
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

          <div className={styles.image}>
            
          </div>

    </div>
  );
};

export default Error404;
