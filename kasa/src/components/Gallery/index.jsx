import Annonces from '../../data/Annonces.json';
import styles from '../../styles/Gallery.module.scss';

function Gallery() {
  return (
    <div className={styles.grid}>
      {Annonces.map((annonce, index) => (
        <div key={index} className={styles.div}>
          <img className={styles.img} src={annonce.cover} alt="Appartement" />
          <span className={styles.span}>{annonce.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
