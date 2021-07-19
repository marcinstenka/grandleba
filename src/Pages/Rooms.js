import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../Components/Navbar/Navbar';
import MobileLogo from '../Components/MobileLogo/MobileLogo';
import Footer from '../Components/Footer/Footer';
import HeroImage1 from '../assets/hero-image1.jpg';

import useMobile from '../CustomHooks/useMobile';

const Rooms = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <MobileLogo />}
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
              <img src={HeroImage1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HeroImage1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="rooms-info">
          <strong>info:</strong> pokoje dla osób niepalących, możliwość
          przyjęcia małych, nieuciążliwych zwierząt, WIFI
        </p>
        <p className="text text-rooms">
          W ofercie Grand Łeba znajdują się jedynie pokoje o podwyższonym
          standardzie. Z okien rozpościera się widok na panoramę miasta Łeba lub
          kanał portowy Chełst. Wszystkie pokoje Grand Łeba objęte są
          kategorycznym zakazem palenia.
          <br />
          <br />
          Z przyjemnością spełnimy Wasze życzenia, aby pobyt w Grand Łeba
          należał do niezapomnianych. Grand Łeba dysponuje również pokojami dwu
          osobowymi oraz apartamentami dwu sypialnianymi. Dla pokoi 2 osobowych
          istnieje możliwość dostawki.
          <br />
          <br />
          Oferujemy możliwość pobytu z małymi, nieuciążliwymi zwierzętami.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
