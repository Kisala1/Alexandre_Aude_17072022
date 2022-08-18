import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarSharp } from '@fortawesome/free-solid-svg-icons';
import styles from './Rating.module.scss'

export function Rating({ rating }) {
  return (
    <div>
      <div className={styles.ratingContainer} >
        <FontAwesomeIcon icon={faStarSharp} />
      </div>
    </div>
  );
}
