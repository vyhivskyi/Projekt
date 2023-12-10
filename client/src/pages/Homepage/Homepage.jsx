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

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", department: "", text: "" });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsResponse = await fetch('http://localhost:8080/api/reviews');
        if (reviewsResponse.ok) {
          const reviewsData = await reviewsResponse.json();
          setReviews(reviewsData);
        } else {
          console.error('Failed to fetch reviews:', reviewsResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };
  
    fetchData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  const handleReviewSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });
    } catch (error) {
      console.error('Error submitting or fetching reviews:', error.message);
    }
  };
  
  const ReviewsSlider = ({ reviews }) => {
    const [startIndex, setStartIndex] = useState(0);

    const getVisibleReviewsCount = () => {
      return window.innerWidth <= 768 ? 1 : 3;
    };
  
    const visibleReviews = reviews.slice(startIndex, startIndex + getVisibleReviewsCount());
    const handlePrevious = () => {
      setStartIndex((prevIndex) => Math.max(0, prevIndex - getVisibleReviewsCount()));
    };

    const handleNext = () => {
      setStartIndex((prevIndex) => Math.min(reviews.length - getVisibleReviewsCount(), prevIndex + getVisibleReviewsCount()));
    };

    return (
      <div className={styles.reviewsSlider}>
        <button onClick={handlePrevious} className={styles.buttonSliderLeft}>
          &#8249;
        </button>
        <div className={styles.peopleReviews}>
          {visibleReviews.map((review, index) => (
            <div className={styles.review} key={index}>
              <div className={styles.person}>
                <div className={styles.personDetails}>
                  <p className={styles.reviewText}>
                    <span className={styles.personName}>{review.name}</span>
                  </p>
                  <p className={styles.reviewText}>
                    <span className={styles.personDepartment}>{review.department}</span>
                  </p>
                </div>
              </div>
              <p className={styles.reviewOpis}>{review.text}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className={styles.buttonSliderRight}>
          &#8250;
        </button>
      </div>
    );
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handlePollubButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

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

    <div className={styles.containerReviews}>
      <div className={styles.reviews}>
        <h1 className={styles.reviewsHeader}>Co studenci mówią o nas?</h1>
        <ReviewsSlider reviews={reviews} />
          <button onClick={handlePollubButtonClick} className={styles.buttonOpinie}>
            Pollub nas :)
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
        {isFormVisible && (
          <div className={styles.reviewForm}>
            <div className={styles.headerContainer}>
              <h2 className={styles.formHeader}>Write a Review</h2>
            </div>
            <form>
              <div className={styles.formRow}>
                <div className={styles.inputContainer}>
                  <label className={styles.label}>Name:</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className={styles.input}
                    />
                </div>
                
                <div className={styles.inputContainer}>
                  <label className={styles.label}>Department:</label>
                  <input
                    type="text"
                    value={newReview.department}
                    onChange={(e) => setNewReview({ ...newReview, department: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputContainer}>
                  <label className={styles.label}>Opinie:</label>
                  <input
                    type="text"
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className={styles.input}
                  />
                </div>
              </div>

              <button onClick={handleReviewSubmit} className={styles.buttonForm}>
                Zapisz
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
            </form>
        </div>
        )}
      
        
      </div>
    );

}

export default Homepage
