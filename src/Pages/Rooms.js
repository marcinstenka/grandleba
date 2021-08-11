import { Swiper, SwiperSlide } from 'swiper/react';
import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import Footer from '../Components/Footer/Footer';
import RoomsImage1 from '../assets/rooms-image1.jpg';
import RoomsImage2 from '../assets/rooms-image2.jpg';
import RoomsImage3 from '../assets/rooms-image3.jpg';
import RoomsImage4 from '../assets/rooms-image4.jpg';
import RoomsImage5 from '../assets/rooms-image5.jpg';
import RoomsImage6 from '../assets/rooms-image6.jpg';
import RoomsImage7 from '../assets/rooms-image7.jpg';
import RoomsImage8 from '../assets/rooms-image8.jpg';
import RoomsImage9 from '../assets/rooms-image9.jpg';

const Rooms = () => {
  const { t } = useTranslation();
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header">Pokoje</h1>
        <div className="rooms-slider">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <img
                className="rooms-image1"
                src={RoomsImage1}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage2}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rooms-image3"
                src={RoomsImage3}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage4}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rooms-image5"
                src={RoomsImage5}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage6}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage7}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage8}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rooms-image9"
                src={RoomsImage9}
                alt="Wygodne i przytulne pokoje w Grand Łeba"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="rooms-info">
          <strong>{t('rooms1')}</strong>
          {t('rooms2')}
        </p>
        <p className="text text-rooms">
          {t('rooms3')}
          <br />
          <br />
          {t('rooms4')}
          <br />
          <br />
          {t('rooms5')}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
