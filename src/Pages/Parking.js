import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

import useMobile from '../CustomHooks/useMobile';

const Parking = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container container-praking">
        {isMobile && <Logo />}
        <h1 className="header">Parking</h1>
        <h4>PARKING MONITOROWANY - GRAND ŁEBA</h4>
        <p className="text">
          Na terenie przynależącym do Grand Łeba zlokalizowano dodatkowy
          parking, wyposażony w monitoring wideo. Rezerwując pobyt zapytaj
          obsługi o dostępność miejsca oraz opłaty i dodatki z nimi związane.
          Nie martw się o to, gdzie i na ile zaparkować swój samochód. W sezonie
          letnim poza parkingiem bezpośrednio przy obiekcie, dysponujemy również
          dwoma innymi parkingami (2 minuty/4 minuty drogi). Miejsca parkingowe
          przydzielane są zgodnie z dostępnością podczas zameldowania.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Parking;
