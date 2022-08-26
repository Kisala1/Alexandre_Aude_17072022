import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './Error.module.scss';

export function Error() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div>
          <span className={styles.span}>404</span>
          <p className={styles.p}>
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>

        <Link to={'/'} className={styles.link}>
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}
