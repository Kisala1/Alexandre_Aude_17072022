import Banner from '../../components/Banner/index';
import Footer from '../../components/Footer/index';
import Photo from '../../assets/Photo_Accueil.png';
import styles from '../../styles/Home.module.scss';
import Gallery from '../../components/Gallery';

function Home() {
  return (
    <div>
      <Banner />

      <div className={styles.divContainer}>
        <img className={styles.img} src={Photo} alt="Nature" />
        <p className={styles.p}>Chez vous, partout et ailleurs </p>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
