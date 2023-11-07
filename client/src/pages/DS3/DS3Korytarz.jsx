import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom"
import Circle from '../../components/Circles/Circle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import circleImage1 from './imagesKorytarz/1.jpg'
import circleImage2 from './imagesKorytarz/2.jpg'
import circleImage3 from './imagesKorytarz/3.jpg'
import circleImage4 from './imagesKorytarz/4.jpg'
import circleImage5 from './imagesKorytarz/5.jpg'
import circleImage6 from './imagesKorytarz/6.jpg'
import circleImage7 from './imagesKorytarz/7.jpg'
import circleImage8 from './imagesKorytarz/8.jpg'
import circleImage9 from './imagesKorytarz/9.jpg'
import circleImage10 from './imagesKorytarz/10.jpg'
import circleImage11 from './imagesKorytarz/11.jpg'
import circleImage12 from './imagesKorytarz/12.jpg'
import circleImage13 from './imagesKorytarz/13.jpg'

const DS3Korytarz = () => {
  const circlesData = [
    { size: '250px', position: { x: '0px', y: '0px' } },
    { size: '210px', position: { x: '230px', y: '195px' } },
    { size: '320px', position: { x: '410px', y: '0px' } },
    { size: '210px', position: { x: '695px', y: '195px' } },
    { size: '250px', position: { x: '880px', y: '0px' } },
    { size: '320px', position: { x: '0px', y: '350px' } },
    { size: '320px', position: { x: '410px', y: '350px' } },
    { size: '210px', position: { x: '230px', y: '615px' } },
    { size: '320px', position: { x: '810px', y: '350px' } },
    { size: '250px', position: { x: '0px', y: '770px' } },
    { size: '210px', position: { x: '695px', y: '615px' } },
    { size: '320px', position: { x: '410px', y: '700px' } },
    { size: '250px', position: { x: '880px', y: '770px' } }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const imageURLs = [circleImage1, circleImage2, circleImage3, circleImage4, circleImage5, circleImage6, circleImage7, circleImage8, circleImage9, circleImage10, circleImage11, circleImage12, circleImage13];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
          <div className={styles.bannerName}>
              <h2 className={styles.Name}>Dom Studenta №3</h2>
          </div>
      </div>
      <div className={styles.dom}>
        <div className={styles.korytarz}>
          <Link to="/DS3/Korytarz" className={styles.name}>
            Korytarz
          </Link>
        </div>
        <div className={styles.kuchnia}>
          <Link to="/DS3/Kuchnia" className={styles.name}>
            Kuchnia
          </Link>
        </div>
        <div className={styles.pokoj}>
          <Link to="/DS3/Pokój" className={styles.name}>
            Pokój
          </Link>
        </div>
      </div>

      {/*Frame */}
      <div className={styles.galeria} ref={ref}>
        {circlesData.map((circle, index) => (
          <motion.div key={index} style={{ position: 'absolute' }}>
            <Circle size={circle.size} position={circle.position} isVisible={inView} imageURL={imageURLs[index]} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default DS3Korytarz;
