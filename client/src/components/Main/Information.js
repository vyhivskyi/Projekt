import styles from "./styles.module.css"
import akademik1 from "./Akademik1.jpg"
import akademik3 from "./Akademik3.jpg"
const Information = ({user}) => {
    return (
        <div className={styles.image_text_container}>
                <div className={styles.text_container}>
                    <h1 className={styles.text}>Ułatwij proces kwaterowania w akademikach Politechniki Lubelskiej</h1>
                    
                </div>
                <div className={styles.image1}>
                    <img src={akademik1} alt="akademik1" className={styles.image} />
                    <p className={styles.description}>1979, Akademiki Politechniki Lubelskiej. Od lewej: Nr. 4, Nr. 3, Nr.2 i Nr.1. Na pierwszym planie: stołówka</p>
                </div>
                <div className={styles.image2}>
                    <img src={akademik3} alt="akademik3" className={styles.image} />
                    <p className={styles.description}>2023, Akademiki Politechniki Lubelskiej. Od lewej: Nr. 4, Nr. 3 i Nr.2. Zdjęcie własne</p>
                </div>
            </div>
    );

}

export default Information
