import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Carrousel, CarouselItem } from '../../components/Carrousel/Carrousel';
import { Tag } from '../../components/Tag/Tag';
import { Rating } from '../../components/Rating/Rating';
import { Accordeon } from '../../components/Accordeon/Accordeon';
import { Footer } from '../../components/Footer/Footer';
import styles from './Annonce.module.scss';

export function Annonce({ annonces }) {
  const { annonceId } = useParams();
  const findAnnonce = annonces.find((annonce) => annonce.id === annonceId);

  return (
    <div>
      <Header />
      <Carrousel>
        {findAnnonce.pictures.map((picture, index) => (
          <CarouselItem key={index} children={picture} />
        ))}
      </Carrousel>

      <div>
        <div className={styles.intitule}>
          <h1 className={styles.title}>{findAnnonce.title}</h1>
          <h2 className={styles.location}>{findAnnonce.location}</h2>
        </div>
        <div className={styles.host}></div>
        <div className={styles.containerTags}>
          {findAnnonce.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <div className={styles.containerRating}>
          <Rating rating={findAnnonce.rating} />
        </div>
      </div>
      <div className={styles.containerAccordeons}>
        <Accordeon
          title="Description"
          content={findAnnonce.description}
          hasOpen={true}
          isFlex={true}
        />

        <Accordeon
          title="Equipements"
          array={findAnnonce.equipments}
          hasOpen={true}
          isFlex={true}
        />
      </div>
      <Footer />
    </div>
  );
}
