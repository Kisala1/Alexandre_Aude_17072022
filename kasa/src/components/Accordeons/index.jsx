import styles from '../../styles/Accordeons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Accordeons() {
  const categories = ['Fiabilité', 'Respect', 'Service', 'Responsabilité'];
  return (
    <div className={styles.accordeons}>
      {categories.map((category, index) => (
        <div key={index}>
          <label htmlFor={category} className={styles.input}>
            <div className={styles.accordeon}>
              {category}
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </label>
          <input className={styles.input} type="checkbox" id={category} hidden />
        </div>
      ))}
    </div>
  );
}

export default Accordeons;
