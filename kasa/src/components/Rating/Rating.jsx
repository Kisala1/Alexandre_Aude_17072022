import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Rating.module.scss';

export function Rating() {
  return (
    <div>
      <div className={styles.ratingContainer}>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
}