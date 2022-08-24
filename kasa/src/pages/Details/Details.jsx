import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Accordeons } from '../../components/Accordeons/Accordeons';
import Photo from '../../assets/Photo_Details.png';

export function Details() {
  return (
    <div>
      <Header hasDetails={true} />
      <Banner photo={Photo} hasFilter={true}></Banner>
      <Accordeons />
      <Footer />
    </div>
  );
}
