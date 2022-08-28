import { Layout } from '../../components/Layout/Layout';
import { Banner } from '../../components/Banner/Banner';
import { Accordeons } from '../../components/Accordeons/Accordeons';
import Photo from '../../assets/Photo_Details.png';
import styles from './Details.module.scss';

export function Details() {
  return (
    <>
      <Layout hasDetails={true}>
        <div className={styles.container}>
          <Banner photo={Photo} hasFilter={true}></Banner>
          <Accordeons />
        </div>
      </Layout>
    </>
  );
}
