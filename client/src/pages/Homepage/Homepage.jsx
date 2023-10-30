import styles from "./styles.module.css"
import Person1Image from './images/Person1.png';
import bannerImage from './images/Banner.jpg';
import bannerImage1 from './images/Banner1.jpg';
import bannerImage2 from './images/Banner2.jpg';
import bannerImage3 from './images/Banner3.jpg';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Homepage = ({user}) => {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [bannerImage, bannerImage1, bannerImage2, bannerImage3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change banner every 5 seconds (adjust the interval as needed)

    return () => clearInterval(intervalId);
  }, [images.length]);

    return (
    <div className={styles.pageContainer}>
      <div className={styles.bannerContainer}>
      <AnimatePresence>
          {images.map((image, index) => (
            index === currentImage && (
              <motion.img
                key={index}
                src={image}
                alt="Banner"
                className={styles.bannerImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            )
          ))}
        </AnimatePresence>
        <div className={styles.overlay}></div>
        <div className={styles.textOverlay}>
          <h1>Ułatwij proces kwaterowania z nami </h1>
          <p className={styles.overlayAdditional}>Rejestracja trwa do 20.09.2023</p>
        </div>
        {/* Link and button for the form */}
        <Link to="/form">
          <button className={styles.buttonOverlay}>
            Podaj wniosek
            <svg
              className={styles.vectorBanner}
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
      {/* Opcje container */}
      <div className={styles.opcjeContainer}>
        <div className={styles.smallContainer}>
          <p className={styles.smallContainerText}>Akademiki i pokoje</p>
          <p className={styles.smallContainerOpis}>Zobacz możliwe opcje do wyboru mieszkania</p>
          <Link to="/akademiki">
            <button className={styles.smallContainerButton}>
              Zobacz
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
        
        <div className={styles.smallContainer}>
          <p className={styles.smallContainerText}>Potrzebne dokumenty</p>
          <p className={styles.smallContainerOpis}>Przeczytaj potrzebne dokumenty dla kwaterowania</p>
          <Link to="/dokumenty">
            <button className={styles.smallContainerButton}>
              Przeczytaj
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
        
        <div className={styles.smallContainer}>
          <p className={styles.smallContainerText}>Ceny pokoju</p>
          <p className={styles.smallContainerOpis}>Sprawdż cene dostępnych pokoje w naszych akademikach</p>
          <Link to="/cennik">
            <button className={styles.smallContainerButton}>
              Sprawdż
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
        
        <div className={styles.smallContainer}>
          <p className={styles.smallContainerText}>Wniosek o miejscu</p>
          <p className={styles.smallContainerOpis}>Wypełnij wniosek o zakwaterowaniu w akademikach</p>
          <Link to="/form">
            <button className={styles.smallContainerButton}>
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

      {/* Container Contact us*/}
      <div className={styles.ContainerContact}>
        <div className={styles.ContainerMiasto}>
          <div className={styles.ContainerMiastoOverlay}>
            <div className={styles.ContainerMiastoTextOverlay}>
              <h2>Miasteczko akademickie Politechniki Lubelskiej</h2>
              <p className={styles.ContainerMiastoTextOverlayAdditional}>Praca zespołu ma na celu zaspokojenie potrzeb studentów Politechniki Lubelskiej.</p>
              <Link to="/akademiki">
                <button className={styles.button}>
                  Zobacz
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
              </Link>
          </div>
        </div>
      </div>
      <div className={styles.ContainerMiastoImage}></div>
    </div>

    {/* Opinie o akademikach */}
    <div className={styles.containerReviews}>
      <div className={styles.reviews}>
        <h1 className={styles.reviewsHeader}>Co studenci mówią o nas?</h1>
        <div className={styles.peopleReviews}>
          <div className={styles.review}>
            <div className={styles.person}>
              <img src={Person1Image} alt="Person1" className={styles.personImage} />
              <div className={styles.personDetails}>
                <p className={styles.reviewText}>
                  <span className={styles.personName}>Natasha Mith</span>
                </p>
                <p className={styles.reviewText}>
                  <span className={styles.personDepartment}>Wydział Zarządzania, Dom Studenta 4</span>
                </p>
              </div>
            </div>
            <p className={styles.reviewOpis}>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
          </div>

          <div className={styles.review}>
            <div className={styles.person}>
              <img src={Person1Image} alt="Person1" className={styles.personImage} />
              <div className={styles.personDetails}>
                <p className={styles.reviewText}>
                  <span className={styles.personName}>Natasha Mith</span>
                </p>
                <p className={styles.reviewText}>
                  <span className={styles.personDepartment}>Wydział Zarządzania, Dom Studenta 4</span>
                </p>
              </div>
            </div>
            <p className={styles.reviewOpis}>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
          </div>

          <div className={styles.review}>
            <div className={styles.person}>
              <img src={Person1Image} alt="Person1" className={styles.personImage} />
              <div className={styles.personDetails}>
                <p className={styles.reviewText}>
                  <span className={styles.personName}>Natasha Mith</span>
                </p>
                <p className={styles.reviewText}>
                  <span className={styles.personDepartment}>Wydział Zarządzania, Dom Studenta 4</span>
                </p>
              </div>
            </div>
            <p className={styles.reviewOpis}>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
    );

}

export default Homepage
