import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';
import RestaurantImage from '../assets/hotel-image5.jpg';

const Restaurant = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header">{t('restaurant1')}</h1>
        <div className="restaurant-wrapper">
          <div className="restaurant-image">
            <img
              src={RestaurantImage}
              alt="Nasza restauracja na pewno przypadnie Ci do gustu."
            />
          </div>
          <p className="text text-restaurant">
            {t('restaurant2')}
            <br />
            {t('restaurant3')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
