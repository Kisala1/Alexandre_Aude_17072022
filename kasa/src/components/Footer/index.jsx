import Logo from '../../assets/Logo_Footer.jpg';
import styles from '../../styles/Footer.module.scss';

function Footer() {
  return (
    <div className={styles.divContainer}>
      <div className={styles.div}>
        <img className={styles.img} src={Logo} alt="Logo Kasa"></img>
        <p className={styles.p}>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;
