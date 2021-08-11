import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import Footer from '../Components/Footer/Footer';

const SafeStay = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header">{t('safeHotel1')}</h1>
        <p className="text ">{t('safeHotel2')}</p>
        <p className="text safe-stay-text">I.{t('safeHotel3')}</p>
        <ul className="safe-stay-list">
          <li>{t('safeHotel4')}</li>
          <li>{t('safeHotel5')}</li>
          <li>{t('safeHotel6')}</li>
          <li>{t('safeHotel7')}</li>
          <li>{t('safeHotel8')}</li>
        </ul>
        <p className="text safe-stay-text">II.{t('safeHotel9')}:</p>
        <ul className="safe-stay-list">
          <li>{t('safeHotel10')}</li>
          <li>{t('safeHotel11')}</li>
          <li>{t('safeHotel12')}</li>
          <li>{t('safeHotel13')}</li>
          <li>{t('safeHotel14')}</li>
          <li>{t('safeHotel15')}</li>
          <li>{t('safeHotel16')}</li>
          <li>{t('safeHotel17')}</li>
          <li>{t('safeHotel18')}</li>
          <li>{t('safeHotel19')}</li>
          <li>{t('safeHotel20')}</li>
          <li>{t('safeHotel21')}</li>
        </ul>
        <p className="text safe-stay-text">III.{t('safeHotel22')}</p>
        <ul className="safe-stay-list">
          <li>{t('safeHotel23')}</li>
          <li>{t('safeHotel24')}</li>
          <li>{t('safeHotel25')}</li>
          <li>{t('safeHotel26')}</li>
          <li>{t('safeHotel27')}</li>
          <li>{t('safeHotel28')}</li>
          <li>{t('safeHotel29')}</li>
          <li>{t('safeHotel30')}</li>
        </ul>
        <p className="text safe-stay-text">IV.{t('safeHotel31')}</p>
        <ul className="safe-stay-list">
          <li>{t('safeHotel32')}</li>
          <li>{t('safeHotel33')}</li>
          <li>{t('safeHotel34')}</li>
          <li>{t('safeHotel35')}</li>
        </ul>
        <p className="text safe-stay-text">V.{t('safeHotel36')}</p>
        <ul className="safe-stay-list">
          <li>{t('safeHotel37')}</li>
          <li>{t('safeHotel38')}</li>
          <li>{t('safeHotel39')}</li>
          <li>{t('safeHotel40')}</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default SafeStay;
