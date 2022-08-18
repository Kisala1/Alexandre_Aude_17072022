import styles from './Banner.module.scss';

export function Banner({ photo, content }) {
  return (
    <div className={styles.banner}>
      <div className={styles.divContainer}>
        <img className={styles.img} src={photo} alt="Nature" />
        <p className={styles.p}>{content}</p>
      </div>
      <div className={styles.effectImg}></div>
    </div>
  );
}
