import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle as fasCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faUtensils as fasUtensils } from '@fortawesome/free-solid-svg-icons';
import { faComment as fasComment } from '@fortawesome/free-solid-svg-icons';
import { faUsers as fasUsers } from '@fortawesome/free-solid-svg-icons';

import MobileLogo from '../MobileLogo/MobileLogo';
import HotelImage1 from '../../assets/hotel-image1.jpg';
import HotelImage2 from '../../assets/hotel-image2.jpg';
import HotelImage3 from '../../assets/hotel-image3.jpg';
import HotelImage4 from '../../assets/hotel-image4.jpg';
import HotelImage5 from '../../assets/hotel-image5.jpg';
import HotelImage6 from '../../assets/hotel-image6.jpg';
import HotelImage7 from '../../assets/hotel-image7.jpg';
import HeroImage1 from '../../assets/hero-image1.jpg';
import HeroImage2 from '../../assets/hero-image2.jpg';
import HeroImage3 from '../../assets/hero-image3.jpg';

const Hero = ({ isMobile }) => {
  return (
    <div className="container">
      {isMobile && <MobileLogo />}
      <div className="hero-slider">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <img src={HotelImage1} alt="Hotel Grand Łeba" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HotelImage2} alt="Hotel Grand Łeba" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HotelImage3} alt="Taras restauracji Grand Łeba" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HotelImage4} alt="Bar restauracji Grand Łeba" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HotelImage5} alt="Restauracja Grand Łeba" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HotelImage6} alt="Taras restauracji Grand Łeba" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HotelImage7} alt="Recepcja Grand Łeba" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hero-welcome">
        <h1>
          Witaj w <br />
          Grand Łeba
        </h1>
        <br />
        <h3>komfortowe noclegi w centrum Łeby podczas wakacji!</h3>
      </div>
      <div className="hero-images">
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={HeroImage1} alt="Plaża bardzo blisko hotelu!" />
          </div>

          <h5>tylko 6* minut do piaszczystej plaży</h5>
          <p>*zgodnie z trasą z GoogleMaps</p>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src={HeroImage2}
              alt="Nasz hotel systematycznie otrzymuje wysokie oceny w Guest Review Awards od kilku lat!"
            />
          </div>

          <h5>
            9,5 - Guest Review Awards 2020, <br />
            9,5 - Guest Review Awards 2019, <br />
            9,4 - Guest Review Award 2018
          </h5>
          <p>...poprawiamy standardy obsługi.</p>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src={HeroImage3}
              alt="Zwiedzaj wielki park dinazaurów w Łebie!"
            />
          </div>

          <h5>zwiedzaj Łeba Park z Grand Łeba</h5>
          <p>
            W cenie noclegu w Grand Łeba (3 noclegi + wyżywienie) wstęp do Łeba
            Parku GRATIS!
          </p>
        </div>
      </div>
      <div className="hero-info">
        <h2>Udany wypoczynek w Łebie?</h2>
        <h4>Grand Łeba! Noclegi, parking, doskonała obsługa !</h4>
        <div className="info-item">
          <div className="info-item__header">
            <h3>Parking monitorowany</h3>
            <FontAwesomeIcon icon={fasCheckCircle} />
          </div>
          <p>
            dla naszych gości, udostępniamy monitorowany parking w samym centrum
            Łeby. Nie martw się o to, gdzie i na ile zaparkować swój samochód. W
            sezonie letnim poza parkingiem bezpośrednio przy obiekcie,
            dysponujemy również dwoma innymi parkingami (2 minuty/4 minuty
            drogi). Miejsca parkingowe przydzielane są zgodnie z dostępnością
            podczas zameldowania.
          </p>
        </div>
        <div className="info-item">
          <div className="info-item__header">
            <h3>Restauracja</h3>
            <FontAwesomeIcon icon={fasUtensils} />
          </div>
          <p>W cenie rezerwowanego pokoju zawiera się śniadanie.</p>
        </div>
        <div className="info-item">
          <div className="info-item__header">
            <h3>Wsparcie obsługi</h3>
            <FontAwesomeIcon icon={fasComment} />
          </div>
          <p>
            Masz pytania związane z organizacją pobytu? Chętnie pomożemy! Po
            prostu zadaj nam pytanie...
          </p>
        </div>
        <div className="info-item">
          <div className="info-item__header">
            <h3>
              Grand Łeba - <br /> Adults Only (13+)
            </h3>
            <FontAwesomeIcon icon={fasUsers} />
          </div>
          <p>
            Nasz obiekt to idealne miejsce dla osób chcących odpocząć w
            atmosferze ciszy i spokoju. Jesteśmy jednym z niewielu miejsc w
            Polsce przeznaczonym wyłącznie dla osób dorosłych i młodzieży
            powyżej 13 roku życia (jedynym w Łebie). Rezerwując pobyt w naszym
            obiekcie mogą mieć Państwo pewność, że chwile relaksu nie zostaną
            zakłócone gwarem wywołanym przez kilkuletnie pociechy. Grand Łeba to
            idealne miejsce dla osób ceniących sobie odpoczynek w ciszy i
            spokoju, lubujących się w prostych i eleganckich wnętrzach oraz
            miłośników wyśmienitego jedzenia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
