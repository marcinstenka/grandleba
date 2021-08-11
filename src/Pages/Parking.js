import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

const Parking = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container container-parking">
        {isMobile && <Logo />}
        <h1 className="header">{t('parking1')}</h1>
        <h4>{t('parking2')}</h4>
        <p className="text">{t('parking3')}</p>
      </div>
      <Footer />
    </>
  );
};

export default Parking;
