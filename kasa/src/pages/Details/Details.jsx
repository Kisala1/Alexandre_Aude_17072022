import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Accordeons } from '../../components/Accordeons/Accordeons';
import Photo from '../../assets/Photo_Details.png';
import styles from './Details.module.scss'

export function Details() {
  return (
    <div>
      <Header />
      <Banner photo={Photo}>
      <div className={styles.effectImg}></div>
      </Banner>
      <Accordeons />
      <Footer />
    </div>
  );
}
