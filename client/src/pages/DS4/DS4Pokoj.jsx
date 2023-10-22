import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom"
import Circle from '../../components/Circles/Circle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DS4Pokoj = () => {
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

  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
          <div className={styles.bannerName}>
              <h2 className={styles.Name}>Dom Studenta №4</h2>
          </div>
      </div>
      <div className={styles.dom}>
        <div className={styles.korytarz}>
          <Link to="/DS4/Korytarz" className={styles.name}>
            Korytarz
          </Link>
        </div>
        <div className={styles.kuchnia}>
          <Link to="/DS4/Kuchnia" className={styles.name}>
            Kuchnia
          </Link>
        </div>
        <div className={styles.pokoj}>
          <Link to="/DS4/Pokój" className={styles.name}>
            Pokój
          </Link>
        </div>
      </div>

      {/*Frame */}
      <div className={styles.galeria} ref={ref}>
        {circlesData.map((circle, index) => (
          <motion.div key={index} style={{ position: 'absolute' }}>
            <Circle size={circle.size} position={circle.position} isVisible={inView} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default DS4Pokoj;
