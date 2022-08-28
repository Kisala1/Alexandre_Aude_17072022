import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Error.module.scss';

export function Error() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.div}>
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
      <Footer />
    </>
  );
}
