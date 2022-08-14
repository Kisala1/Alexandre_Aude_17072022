import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import styles from '../../styles/Banner.module.scss';

function Header() {
  return (
    <div className={styles.divContainer}>
      <img className={styles.img} src={Logo} alt="Logo Kasa"></img>
      <nav>
        <Link to="/" className={styles.link}>Accueil</Link>
        <Link to="/details" className={styles.link}>A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
