import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Accordeon } from '../../components/Accordeon/Accordeon';
import styles from './Annonce.module.scss';

export function Annonce({ annonce }) {
  return (
    <div>
      <Banner />
      {annonce.pictures.map((picture, index) => (
        <div key={index}>
          <img src={picture} alt="Logement" />
        </div>
      ))}
      <div>
        <div className={styles.intitulé}>
          <h1>{annonce.title}</h1>
          <h2>{annonce.location}</h2>
        </div>
        <div className={styles.host}>

        </div>
      </div>
      <Accordeon title='Description' content={annonce.description}/>
      <Accordeon title='Equipements' content={annonce.equipements}/>
      <Footer />
    </div>
  );
}
