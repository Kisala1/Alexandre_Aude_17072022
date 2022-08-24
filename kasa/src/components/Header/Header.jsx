import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/Logo.png';
import styles from './Header.module.scss';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: large;
  color: #ff6060;
  padding: 10px;

  &:active {
    color: inherit;
  }
  ${(props) => props.$hasAccueil && `text-decoration: underline #ff6060`}
  ${(props) => props.$hasDetails && `text-decoration: underline #ff6060`}
`;

export function Header({ hasAccueil, hasDetails }) {
  return (
    <div className={styles.divContainer}>
      <img className={styles.img} src={Logo} alt="Logo Kasa"></img>
      <nav>
        {hasAccueil ? (
          <StyledLink to="/" $hasAccueil>
            Accueil
          </StyledLink>
        ) : (
          <StyledLink to="/">Accueil</StyledLink>
        )}
        {hasDetails ? (
          <StyledLink to="/details" $hasDetails>
            A Propos
          </StyledLink>
        ) : (
          <StyledLink to="/details">A Propos</StyledLink>
        )}
      </nav>
    </div>
  );
}
