import { Swiper, SwiperSlide } from 'swiper/react';
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

import useMobile from '../CustomHooks/useMobile';

const Rooms = () => {
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
              <img className="rooms-image1" src={RoomsImage1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RoomsImage2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rooms-image3" src={RoomsImage3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RoomsImage4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rooms-image5" src={RoomsImage5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RoomsImage6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RoomsImage7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RoomsImage8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rooms-image9" src={RoomsImage9} alt="" />
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
