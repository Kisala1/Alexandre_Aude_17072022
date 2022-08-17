import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Accordeon.module.scss';

export function Accordeon({ title, content }) {
  
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.titleAccordeon} onClick={() => setOpen(!isOpen)}>
        {title}
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>
      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
}
