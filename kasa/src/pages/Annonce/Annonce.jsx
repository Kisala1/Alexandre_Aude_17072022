import { Navigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { Carrousel, CarouselItem } from '../../components/Carrousel/Carrousel';
import { Tag } from '../../components/Tag/Tag';
import { Profil } from '../../components/Profil/Profil';
import { Rating } from '../../components/Rating/Rating';
import { Accordeon } from '../../components/Accordeon/Accordeon';
import styles from './Annonce.module.scss';

export function Annonce({ annonces }) {
  const { annonceId } = useParams();
  const findAnnonce = annonces.find((annonce) => annonce.id === annonceId);

  return (
    <>
      {findAnnonce !== undefined ? (
        <Layout>
          <div className={styles.container}>
            <Carrousel>
              {findAnnonce.pictures.map((picture, index) => (
                <CarouselItem key={index} children={picture} />
              ))}
            </Carrousel>

            <div className={styles.divFlex}>
              <div className={styles.containerIT}>
                <div className={styles.intitule}>
                  <h1 className={styles.title}>{findAnnonce.title}</h1>
                  <h2 className={styles.location}>{findAnnonce.location}</h2>
                </div>
                <div className={styles.tags}>
                  {findAnnonce.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </div>
              </div>

              <div className={styles.containerRating}>
                <Profil
                  picture={findAnnonce.host.picture}
                  name={findAnnonce.host.name}
                />
                <div className={styles.rating}>
                  <Rating rating={findAnnonce.rating} />
                </div>
              </div>
            </div>

            <div className={styles.containerAccordeons}>
              <Accordeon
                title="Description"
                content={findAnnonce.description}
                isFlex={true}
              />

              <Accordeon
                title="Equipements"
                array={findAnnonce.equipments}
                isFlex={true}
              />
            </div>
          </div>
        </Layout>
      ) : (
        <Navigate to="/error" replace={true} />
      )}
    </>
  );
}
