import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import Photo from '../../assets/Photo_Accueil.png';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import styles from './Home.module.scss';

export function Home({ annonces }) {
  const texte = 'Chez vous, partout et ailleurs';
  return (
    <>
      <Layout hasAccueil={true}>
        <div className={styles.container}>
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
        </div>
      </Layout>
    </>
  );
}
