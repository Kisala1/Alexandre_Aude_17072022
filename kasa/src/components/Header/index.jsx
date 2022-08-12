import Logo from '../../assets/Logo.jpg';
import styles from '../../styles/Header.module.scss';

function Header() {
  return (
    <div className={styles.divContainer}>
      <img className={styles.img} src={Logo} alt="Logo Kasa"></img>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>Accueil</li>
          <li className={styles.li}>A Propos</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
