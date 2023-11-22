import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom"
import Circle from '../../components/Circles/Circle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import circleImage1 from './imagesKuchnia/1.jpg'
import circleImage2 from './imagesKuchnia/2.jpg'
import circleImage3 from './imagesKuchnia/3.jpg'
import circleImage4 from './imagesKuchnia/4.jpg'
import circleImage5 from './imagesKuchnia/5.jpg'
import circleImage6 from './imagesKuchnia/6.jpg'
import circleImage7 from './imagesKuchnia/7.jpg'
import circleImage8 from './imagesKuchnia/8.jpg'
import circleImage9 from './imagesKuchnia/9.jpg'
import circleImage10 from './imagesKuchnia/10.jpg'
import circleImage11 from './imagesKuchnia/11.jpg'
import circleImage12 from './imagesKuchnia/12.jpg'
import circleImage13 from './imagesKuchnia/13.jpg'

const DS2Kuchnia = () => {
  const [circlesData, setCirclesData] = useState([
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
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageURLs = [circleImage1, circleImage2, circleImage3, circleImage4, circleImage5, circleImage6, circleImage7, circleImage8, circleImage9, circleImage10, circleImage11, circleImage12, circleImage13];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCirclesData([
          { size: '120px', position: { x: '10px', y: '0px' } },
          { size: '100px', position: { x: '100px', y: '95px' } },
          { size: '200px', position: { x: '205px', y: '0px' } },
          { size: '100px', position: { x: '410px', y: '95px' } },
          { size: '120px', position: { x: '480px', y: '0px' } },
          { size: '200px', position: { x: '10px', y: '200px' } },
          { size: '120px', position: { x: '250px', y: '250px' } },
          { size: '100px', position: { x: '100px', y: '410px' } },
          { size: '200px', position: { x: '400px', y: '200px' } },
          { size: '120px', position: { x: '10px', y: '500px' } },
          { size: '100px', position: { x: '410px', y: '410px' } },
          { size: '200px', position: { x: '205px', y: '420px' } },
          { size: '120px', position: { x: '480px', y: '500px' } }
        ]);
      } else {
        setCirclesData([
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
        ]);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
          <div className={styles.bannerName}>
              <h2 className={styles.Name}>Dom Studenta №2</h2>
          </div>
      </div>
      <div className={styles.dom}>
        <div className={styles.korytarz}>
          <Link to="/DS2/Korytarz" className={styles.name}>
            Korytarz
          </Link>
        </div>
        <div className={styles.kuchnia}>
          <Link to="/DS2/Kuchnia" className={styles.name}>
            Kuchnia
          </Link>
        </div>
        <div className={styles.pokoj}>
          <Link to="/DS2/Pokój" className={styles.name}>
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


export default DS2Kuchnia;
