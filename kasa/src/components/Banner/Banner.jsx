import styles from './Banner.module.scss';

export function Banner({ photo, content, children }) {
  return (
    <div>
      <div className={styles.divContainer}>
        <img className={styles.img} src={photo} alt="Nature" />
        <p className={styles.p}>{content}</p>
      </div>
      {children}
    </div>
  );
}
