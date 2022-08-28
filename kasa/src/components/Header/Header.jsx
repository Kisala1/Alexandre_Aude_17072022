import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/Logo.png';
import styles from './Header.module.scss';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: large;
  color: #ff6060;
  margin: 0 10px;

  &:active {
    color: inherit;
  }
  ${(props) => props.$hasAccueil && `border-bottom: 1px #ff6060 solid`}
  ${(props) => props.$hasDetails && `border-bottom: 1px #ff6060 solid`}
`;

export function Header({ hasAccueil, hasDetails }) {
  return (
    <div className={styles.divContainer}>
      <img className={styles.img} src={Logo} alt="Logo Kasa"></img>
      <nav>
        {hasAccueil ? (
          <StyledLink to="/" className={styles.link} $hasAccueil>
            Accueil
          </StyledLink>
        ) : (
          <StyledLink to="/" className={styles.link}>
            Accueil
          </StyledLink>
        )}
        {hasDetails ? (
          <StyledLink to="/details" className={styles.link} $hasDetails>
            A Propos
          </StyledLink>
        ) : (
          <StyledLink to="/details" className={styles.link}>
            A Propos
          </StyledLink>
        )}
      </nav>
    </div>
  );
}
