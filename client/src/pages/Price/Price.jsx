import React from 'react';
import styles from './styles.module.css';

const Price = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
          <div className={styles.bannerName}>
              <h2 className={styles.Name}>Cennik</h2>
          </div>
      </div>

      {/* Pricing container */}
      <div className={styles.price}>
        <div className={styles.priceDS}>
            <h2 className={styles.nameDS}>Dom Studenta №1</h2>
            <div className={styles.content}>
                <div className={styles.optionFirst}>
                    <p className={styles.nameOption}>Pokój dwuosobowy</p>
                    <p className={styles.currencyAmount}>
                        <span className={styles.currency}>zł</span>
                        <span className={styles.amount}>690</span>
                    </p>
                    <p className={styles.month}>/miesiąc</p>
                </div>

                <div className={styles.optionSecond}>
                    <p className={styles.nameOption}>Pokój jednoosobowy</p>
                    <p className={styles.currencyAmount}>
                        <span className={styles.currency}>zł</span>
                        <span className={styles.amount}>1190</span>
                    </p>
                    <p className={styles.month}>/miesiąc</p>
                </div>
            </div>

            <button className={styles.button}>
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

        <div className={styles.priceDS}>
            <h2 className={styles.nameDS}>Dom Studenta №2</h2>
            <div className={styles.content}>
                <div className={styles.optionFirst}>
                    <p className={styles.nameOption}>Pokój dwuosobowy</p>
                    <p className={styles.currencyAmount}>
                        <span className={styles.currency}>zł</span>
                        <span className={styles.amount}>690</span>
                    </p>
                    <p className={styles.month}>/miesiąc</p>
                </div>

                <div className={styles.optionSecond}>
                    <p className={styles.nameOption}>Pokój jednoosobowy</p>
                    <p className={styles.currencyAmount}>
                        <span className={styles.currency}>zł</span>
                        <span className={styles.amount}>1190</span>
                    </p>
                    <p className={styles.month}>/miesiąc</p>
                </div>
            </div>

            <button className={styles.button}>
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

        <div className={styles.priceDS}>
            <h2 className={styles.nameDS}>Dom Studenta №3</h2>
            <div className={styles.content}>
                <div className={styles.optionFirst}>
                    <p className={styles.nameOption}>Pokój dwuosobowy</p>
                    <p className={styles.currencyAmount}>
                        <span className={styles.currency}>zł</span>
                        <span className={styles.amount}>690</span>
                    </p>
                    <p className={styles.month}>/miesiąc</p>
                </div>

                <div className={styles.optionSecond}>
                    <p className={styles.nameOption}>Pokój jednoosobowy</p>
                    <p className={styles.currencyAmount}>
                        <span className={styles.currency}>zł</span>
                        <span className={styles.amount}>1190</span>
                    </p>
                    <p className={styles.month}>/miesiąc</p>
                </div>
            </div>

            <button className={styles.button}>
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

        <div className={styles.priceDS}>
            <h2 className={styles.nameDS}>Dom Studenta №4</h2>
            <div className={styles.content}>
                <div className={styles.optionFirst}>
                    <p className={styles.nameOption}>Pokój trzyosobowy</p>
                    <p className={styles.currencyAmount}>
                        <span className={styles.currency}>zł</span>
                        <span className={styles.amount}>450</span>
                    </p>
                    <p className={styles.month}>/miesiąc</p>
                </div>

                <div className={styles.optionSecond}>
                    <p className={styles.textDescription}>Niestety, w domie studenta 4 nie ma opcji pokoju dwuosobowego oraz jednoosobowego</p>
                </div>
            </div>

            <button className={styles.button}>
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
    </div>  
  );
};



export default Price;
