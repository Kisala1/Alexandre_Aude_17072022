import styles from './Tag.module.scss';

export function Tag({ tag }) {
  return (
    <div>
      <span className={styles.tag}>{tag}</span>
    </div>
  );
}
