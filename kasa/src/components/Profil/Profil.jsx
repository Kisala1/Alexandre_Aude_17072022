import styles from './Profil.module.scss';

export function Profil({ picture, name }) {
  return (
    <div className={styles.container}>
      <span className={styles.span}>{name}</span>
      <div className={styles.containerImg}>
        <img className={styles.img} src={picture} alt="Propriétaire" />
      </div>
    </div>
  );
}
