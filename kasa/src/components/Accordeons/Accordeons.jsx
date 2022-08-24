import styles from './Accordeons.module.scss';
import { Accordeon } from '../Accordeon/Accordeon';

export function Accordeons() {
  const txtRespect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';

  const categories = ['Fiabilité', 'Respect', 'Service', 'Responsabilité'];

  return (
    <div className={styles.accordeons}>
      {categories.map((category, index) => (
        <Accordeon
          title={category}
          key={index}
          content={category === 'Respect' ? txtRespect : ' '}
          hasOpen={false}
        ></Accordeon>
      ))}
    </div>
  );
}
