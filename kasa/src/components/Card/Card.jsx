import styles from './Card.module.scss';

export function Card({ annonce }) {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={annonce.cover} alt="Appartement" />
      <span className={styles.span}>{annonce.title}</span>
    </div>
  );
}
