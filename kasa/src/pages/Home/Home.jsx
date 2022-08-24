import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import Photo from '../../assets/Photo_Accueil.png';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';
import styles from './Home.module.scss';

export function Home({ annonces }) {
  const texte = 'Chez vous, partout et ailleurs';
  return (
    <div>
      <Header hasAccueil={true} />
      <Banner photo={Photo} content={texte} />
      <div className={styles.grid}>
        {annonces.map((annonce, index) => (
          <div key={index} className={styles.div}>
            <Link className={styles.link} to={`/annonces/${annonce.id}`}>
              <Card annonce={annonce}></Card>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
