import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Accordeon.module.scss';

export function Accordeon({ title, content, hasOpen, array, isFlex }) {
  const hasArray = () => {
    if (array) {
      return array.map((equipement, index) => (
        <li key={index}>{equipement}</li>
      ));
    }
  };

  const [isOpen, setOpen] = useState(hasOpen);

  return (
    <>
      {isFlex ? (
        <div className={styles.flex}>
          <div>
            <div
              className={styles.titleAccordeon}
              onClick={() => setOpen(!isOpen)}
            >
              {title}
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            {isOpen && content && (
              <div className={styles.content}>{content}</div>
            )}
            {isOpen && array && <ul className={styles.array}>{hasArray()}</ul>}
          </div>
        </div>
      ) : (
        <div>
          <div
            className={styles.titleAccordeon}
            onClick={() => setOpen(!isOpen)}
          >
            {title}
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
          {isOpen && content && <div className={styles.content}>{content}</div>}
          {isOpen && array && <ul className={styles.array}>{hasArray()}</ul>}
        </div>
      )}
    </>
  );
}
