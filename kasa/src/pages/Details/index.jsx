import Banner from '../../components/Banner/index';
import Footer from '../../components/Footer/index';
import Accordeons from '../../components/Accordeons';
import Photo from '../../assets/Photo_Details.png';
import styles from '../../styles/Details.module.scss';

function Details() {
  return (
    <div>
      <Banner />
      <div className={styles.divImg}>
        <img className={styles.img} src={Photo} alt="Paysage montagneux" />
        <div className={styles.effectImg}></div>
      </div>
      <Accordeons />
      
        {/* <div className={styles.div}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div> */}
      <Footer />
    </div>
  );
}

export default Details;
