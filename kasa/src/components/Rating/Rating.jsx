import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Rating.module.scss';

export function Rating({ rating }) {
  const displayRatings = () => {
    const ratingNumber = parseInt(rating);
    let content = [];

    for (let index = 1; index <= 5; index++) {
      if (ratingNumber >= index) {
        content.push(
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={styles.ratingFull}
          />
        );
      } else if (ratingNumber < index) {
        content.push(
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={styles.ratingVoid}
          />
        );
      }
    }
    return <div>{content}</div>;
  };

  return <div>{displayRatings()}</div>;
}
