// Update your Dokumenty component

import React, { useState } from 'react';
import styles from './styles.module.css';

const Dokumenty = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [showText6, setShowText6] = useState(false);

  const [arrowRotation1, setArrowRotation1] = useState(0);
  const [arrowRotation2, setArrowRotation2] = useState(0);
  const [arrowRotation3, setArrowRotation3] = useState(0);
  const [arrowRotation4, setArrowRotation4] = useState(0);
  const [arrowRotation5, setArrowRotation5] = useState(0);
  const [arrowRotation6, setArrowRotation6] = useState(0);

  const toggleText = (index, isArrowClick) => {
    switch (index) {
      case 1:
        if (isArrowClick && showText1) {
            setShowText1(false);
            setArrowRotation1(0);
        } else {
            setShowText1(!showText1);
            setArrowRotation1(arrowRotation1 + 90);
        }
        break;
      case 2:
        if (isArrowClick && showText2) {
            setShowText2(false);
            setArrowRotation2(0);
        } else {
            setShowText2(!showText2);
            setArrowRotation2(arrowRotation2 + 90);
        }
        break;
      case 3:
        if (isArrowClick && showText3) {
            setShowText3(false);
            setArrowRotation3(0);
        } else {
            setShowText3(!showText3);
            setArrowRotation3(arrowRotation3 + 90);
        }
          break;
      case 4:
        if (isArrowClick && showText4) {
            setShowText4(false);
            setArrowRotation4(0);
        } else {
            setShowText4(!showText4);
            setArrowRotation4(arrowRotation4 + 90);
        }
        break;
      case 5:
        if (isArrowClick && showText5) {
            setShowText5(false);
            setArrowRotation5(0);
        } else {
            setShowText5(!showText5);
            setArrowRotation5(arrowRotation5 + 90);
        }
        break;
      case 6:
        if (isArrowClick && showText6) {
            setShowText6(false);
            setArrowRotation6(0);
        } else {
            setShowText6(!showText6);
            setArrowRotation6(arrowRotation6 + 90);
        }
          break;
      default:
        break;
    }

  // Only toggle text if it's a text click, not an arrow click
  if (!isArrowClick) {
    setShowText1(false);
    setShowText2(false);
    setShowText3(false);
    setShowText4(false);
    setShowText5(false);
    setShowText6(false);

    setArrowRotation1(0);
    setArrowRotation2(0);
    setArrowRotation3(0);
    setArrowRotation4(0);
    setArrowRotation5(0);
    setArrowRotation6(0);

    switch (index) {
      case 1:
        setShowText1(true);
        break;
      case 2:
        setShowText2(true);
        break;
      case 3:
        setShowText3(true);
        break;
      case 4:
        setShowText4(true);
        break;
      case 5:
        setShowText5(true);
        break;
      case 6:
        setShowText6(true);
        break;
      default:
        break;
    }
  }
};

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerName}>
          <h2 className={styles.Name}>Dokumenty</h2>
        </div>
      </div>

      {/* Dokumenty Container */}
        <div className={styles.dokumenty}>
            <h1 className={styles.dokumentyName}>Dokumenty</h1>
            <div className={styles.contentImage}>
                <div className={styles.content}>
                    <div className={styles.links}>
                        <div className={styles.firstDoc}>
                        <div className={styles.firstNameContainer}>
                            <h2
                            className={styles.firstName}
                            onClick={() => toggleText(1)}
                            >
                            Kwaterowanie studentów
                            </h2>
                            <span 
                                className={styles.toggleArrow} 
                                style={{ transform: `rotate(${arrowRotation1}deg)` }}
                                onClick={() => toggleText(1, true)}>
                            <svg
                                className={styles.vector}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 17"
                            >
                                <path
                                d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                strokeWidth="3"
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                />
                            </svg>
                            </span>
                        </div>
                        {showText1 && (
                            <div className={styles.additionalText}>
                            <p>Kwaterowanie mieszkańców w domach studenckich </p>
                            <button className={styles.button}>
                                Pobierz
                                <svg
                                    className={styles.vectorButton}
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
                        )}

                        <div className={styles.firstNameContainer}>
                            <h2
                            className={styles.firstName}
                            onClick={() => toggleText(2)}
                            >
                            Wysokości opłat
                            </h2>
                            <span 
                                className={styles.toggleArrow} 
                                style={{ transform: `rotate(${arrowRotation2}deg)` }}
                                onClick={() => toggleText(2, true)}>
                            <svg
                                className={styles.vector}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 17"
                            >
                                <path
                                d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                strokeWidth="3"
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                />
                            </svg>
                            </span>
                        </div>
                        {showText2 && (
                            <div className={styles.additionalText}>
                            <p>Wysokości opłat za korzystanie z zakwaterowania oraz zasad przyznawania ulg</p>
                            <button className={styles.button}>
                                Pobierz
                                <svg
                                    className={styles.vectorButton}
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
                        )}

                        <div className={styles.firstNameContainer}>
                            <h2
                            className={styles.firstName}
                            onClick={() => toggleText(3)}
                            >
                            Regulamin akademików
                            </h2>
                            <span 
                                className={styles.toggleArrow} 
                                style={{ transform: `rotate(${arrowRotation3}deg)` }}
                                onClick={() => toggleText(3, true)}>
                            <svg
                                className={styles.vector}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 17"
                            >
                                <path
                                d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                strokeWidth="3"
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                />
                            </svg>
                            </span>
                        </div>
                        {showText3 && (
                            <div className={styles.additionalText}>
                            <p>Regulamin Domu Studenckiego Politechniki Lubelskiej</p>
                            <button className={styles.button}>
                                Pobierz
                                <svg
                                    className={styles.vectorButton}
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
                        )}
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}></div>
            </div>
        </div>

        {/* Listy Container */}
        <div className={styles.listy}>
            <h1 className={styles.dokumentyName}>Listy</h1>
            <div className={styles.contentImageListy}>
                <div className={styles.imageContainerListy}></div>
                <div className={styles.contentListy}>
                    <div className={styles.linksListy}>
                        <div className={styles.firstLista}>
                            <div className={styles.firstNameListy}>
                                <h2
                                className={styles.firstName}
                                onClick={() => toggleText(4)}
                                >
                                Lista DS2
                                </h2>
                                <span 
                                    className={styles.toggleArrow} 
                                    style={{ transform: `rotate(${arrowRotation4}deg)` }}
                                    onClick={() => toggleText(4, true)}>
                                <svg
                                    className={styles.vector}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 17"
                                >
                                    <path
                                    d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                    strokeWidth="3"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                                </span>
                            </div>
                            {showText4 && (
                                <div className={styles.additionalText}>
                                <p>Lista osób przyjętych do DS2</p>
                                <button className={styles.button}>
                                    Pobierz
                                    <svg
                                        className={styles.vectorButton}
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
                            )}

                            <div className={styles.firstNameListy}>
                                <h2
                                className={styles.firstName}
                                onClick={() => toggleText(5)}
                                >
                                Lista DS3
                                </h2>
                                <span 
                                    className={styles.toggleArrow} 
                                    style={{ transform: `rotate(${arrowRotation5}deg)` }}
                                    onClick={() => toggleText(5, true)}>
                                <svg
                                    className={styles.vector}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 17"
                                >
                                    <path
                                    d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                    strokeWidth="3"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                                </span>
                            </div>
                            {showText5 && (
                                <div className={styles.additionalText}>
                                <p>Lista osób przyjętych do DS3</p>
                                <button className={styles.button}>
                                    Pobierz
                                    <svg
                                        className={styles.vectorButton}
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
                            )}

                            <div className={styles.firstNameListy}>
                                <h2
                                className={styles.firstName}
                                onClick={() => toggleText(6)}
                                >
                                Lista DS4
                                </h2>
                                <span 
                                    className={styles.toggleArrow} 
                                    style={{ transform: `rotate(${arrowRotation6}deg)` }}
                                    onClick={() => toggleText(6, true)}>
                                <svg
                                    className={styles.vector}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 17"
                                >
                                    <path
                                    d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                    strokeWidth="3"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                                </span>
                            </div>
                            {showText6 && (
                                <div className={styles.additionalText}>
                                <p>Lista osób przyjętych do DS4</p>
                                <button className={styles.button}>
                                    Pobierz
                                    <svg
                                        className={styles.vectorButton}
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
                            )}
                            </div>
                        </div>
                    </div>
            </div>
        </div>    
    </div>
  );
};

export default Dokumenty;
