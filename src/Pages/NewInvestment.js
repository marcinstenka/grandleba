import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';
import InvestmentImage1 from '../assets/investment-image1.jpg';
import InvestmentImage2 from '../assets/investment-image2.jpg';
import InvestmentImage3 from '../assets/investment-image3.jpg';
import InvestmentImage4 from '../assets/investment-image4.jpg';
import InvestmentImage5 from '../assets/investment-image5.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

import useMobile from '../CustomHooks/useMobile';
const NewInvestment = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header new-investment-header">
          GRAND ŁEBA – NOWA INWESTYCJA
        </h1>
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
            <strong>Nowoczesny obiekt</strong> - Grand Łeba, oddany do użytku w
            2018 roku, położony jest w centrum miasta, tuż przy kanale Chełst.
            Rozpościera się stąd fantastyczny widok na Łebę. Będąc naszym
            gościem skorzystasz z dobrodziejstw centrum miasta, jednocześnie
            czerpiąc najlepsze doznania wynikające z umiejscowienia naszego
            hotelu w zaciszu spokojnej ulicy.
            <br />
            <br />
            To zaledwie <strong>6 minut</strong> spacerem do pięknej,
            piaszczystej plaży, <strong>100m</strong> od centralnego placu
            miasta oraz restauracji, kawiarni, klubów.
            <br />
            <br />
            Do Państwa dyspozycji oferujemy pokoje 1,2,3,4 - osobowe oraz
            komfortowe apartamenty. Wszystkie pokoje są elegancko umeblowane i
            utrzymane w ciepłych kolorach. W każdym pokoju znajduje się sejf,
            nowoczesna łazienka z prysznicem (ręczniki i mydełko na wyposażeniu)
            oraz bezpłatny dostęp do sieci WiFi.
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
            Nasza restauracja z drink barem i klimatycznym tarasem serwuje
            znakomite dania kuchni polskiej i regionalnej, koktajle, drinki oraz
            wyśmienitą kawę - doskonałe dopełnienie pełnego wrażeń dnia
            spędzonego na świeżym powietrzu.
            <br />
            <br />
            Wszystko to sprawia, że w Grand Łeba spędzisz niezapomniany letni
            wypoczynek.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewInvestment;
