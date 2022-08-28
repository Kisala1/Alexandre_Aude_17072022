import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Layout({ hasDetails, hasAccueil,footerFixed,  children }) {
  return (
    <>
      <Header hasAccueil={hasAccueil} hasDetails={hasDetails} />
      {children}
      <Footer footerFixed={footerFixed} />
    </>
  );
}
