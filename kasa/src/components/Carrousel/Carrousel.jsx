import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Carrousel.module.scss';

//https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const CarouselItem = ({ children, width }) => {
  return (
    <img
      src={children}
      alt="Logement"
      className={styles.carrouselItem}
      style={{ width: width }}
    />
  );
};

export const Carrousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const count = React.Children.count(children);

  return (
    <div className={styles.carrousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            width: '100%',
          });
        })}
      </div>

      <div className={styles.count}>
        {activeIndex + 1}/{count}
      </div>

      {children.length === 1 ? (
        <div></div>
      ) : (
        <div className={styles.indicators}>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
};
