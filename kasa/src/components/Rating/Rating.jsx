import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import styles from './Rating.module.scss';

const StyleRating = styled(FontAwesomeIcon)`
  color: #ff6060;
  ${(props) => props.$greyRating && `color: #E3E3E3`}
`;

export function Rating({ rating }) {
  const displayRatings = () => {
    const ratingNumber = parseInt(rating);
    let content = [];

    for (let index = 1; index <= 5; index++) {
      if (ratingNumber >= index) {
        content.push(<StyleRating key={index} icon={faStar} />);
      } else if (ratingNumber < index) {
        content.push(<StyleRating key={index} icon={faStar} $greyRating />);
      }
    }
    return <div className={styles.ratingContainer}>{content}</div>;
  };

  return <div>{displayRatings()}</div>;
}
