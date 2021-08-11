import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';

const ForGroups = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header for-groups-header">{t('groups1')}</h1>
        <p className="text">
          {t('groups2')}
          <br />
          <br />
          {t('groups3')}
          <br />
          <br />
          {t('groups4')}
          <br />
          <br />
          {t('groups5')}
          <br />
          <br />
          <strong>email: biuro@grandleba.pl</strong>
          <br />
          <strong>
            <a href="tel:723-724-884">tel.: 723-724-884</a>
          </strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ForGroups;
