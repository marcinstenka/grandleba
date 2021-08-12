import { Swiper, SwiperSlide } from 'swiper/react';
import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';
import InvestmentImage1 from '../assets/investment-image1.jpg';
import InvestmentImage2 from '../assets/investment-image2.jpg';
import InvestmentImage3 from '../assets/investment-image3.jpg';
import InvestmentImage4 from '../assets/investment-image4.jpg';
import InvestmentImage5 from '../assets/investment-image5.jpg';

const NewInvestment = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header new-investment-header">{t('newInvestment1')}</h1>
        <div className="new-investment-wrapper">
          <div className="new-investment-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation
              loop
              autoplay={{ delay: 2000 }}
            >
              <SwiperSlide>
                <img
                  src={InvestmentImage1}
                  alt="Grand Łeba - nowa inwestycja"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={InvestmentImage2}
                  alt="Grand Łeba - nowa inwestycja"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={InvestmentImage3}
                  alt="Grand Łeba - nowa inwestycja"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="text text-new-investment">
            <strong>{t('newInvestment2')}</strong>
            {t('newInvestment3')}
            <br />
            <br />
            {t('newInvestment4')}
            <strong>{t('newInvestment5')}</strong>
            {t('newInvestment6')}
            <strong>{t('newInvestment7')}</strong>
            {t('newInvestment8')}
            <br />
            <br />
            {t('newInvestment9')}
          </p>
        </div>
        <div className="new-investment-wrapper">
          <div className="new-investment-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation
              loop
              autoplay={{ delay: 2000 }}
            >
              <SwiperSlide>
                <img
                  src={InvestmentImage4}
                  alt="Grand Łeba - nowa inwestycja"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={InvestmentImage5}
                  alt="Grand Łeba - nowa inwestycja"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="text text-new-investment">
            {t('newInvestment10')}
            <br />
            <br />
            {t('newInvestment11')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewInvestment;
