import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

const Apartments = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header">{t('apartments1')}</h1>
        <p className="apartments-info">
          <strong>{t('apartments2')}</strong> {t('apartments3')}
          <br />
          <strong>{t('apartments4')}</strong> {t('apartments5')}
          <br />
          <strong>{t('apartments6')}</strong> {t('apartments7')}
        </p>
        <p className="text text-apartments">
          {t('apartments8')}
          <br />
          <br />
          {t('apartments9')}
          <br />
          <br />
          {t('apartments10')}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Apartments;
