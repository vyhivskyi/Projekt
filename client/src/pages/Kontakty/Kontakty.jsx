// Update your Dokumenty component

import React from 'react';
import styles from './styles.module.css';

const Kontakt = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerName}>
          <h2 className={styles.Name}>Kontakt</h2>
        </div>
      </div>

      {/* Kontakt1 Container */}
        <div className={styles.kontaktA}>
            <div className={styles.contentImageA}>
                <div className={styles.imageContainerA}></div>
                <div className={styles.contentA}>
                    <div className={styles.aKontakt}>
                        <div className={styles.aKontaktName}>
                            <h2 className={styles.partA}>Zespół Domów Studenckich A</h2>
                        </div>
                        <div className={styles.kierownik}>
                            <p>Kierownik: mgr inż. Barbara Pawłowska</p>
                            <p>(+81) 538 45 55</p>
                            <p>b.pawłowska@pollub.pl</p>
                        </div>
                        <div className={styles.portiernia}>
                            <p>DS1 Portiernia:</p>
                            <p>(+81) 538 45 54</p>
                        </div>
                        <div className={styles.portiernia}>
                            <p>DS2 Portiernia:</p>
                            <p>(+81) 538 45 56</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Listy Container */}
        <div className={styles.kontaktB}>
            <div className={styles.contentImageB}>
                <div className={styles.contentB}>
                    <div className={styles.bKontakt}>
                        <div className={styles.bKontaktName}>
                            <h2 className={styles.partB}>Zespół Domów Studenckich B</h2>
                        </div>
                        <div className={styles.kierownik}>
                            <p>Kierownik: inż. Ewa Derda</p>
                            <p>(+81) 538 45 57</p>
                            <p>e.derda@pollub.pl</p>
                        </div>
                        <div className={styles.portiernia}>
                            <p>DS3 Portiernia:</p>
                            <p>(+81) 538 45 54</p>
                        </div>
                        <div className={styles.portiernia}>
                            <p>DS4 Portiernia:</p>
                            <p>(+81) 538 45 60</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainerB}></div>
            </div>
        </div>
    </div>    
  );
};

export default Kontakt;
