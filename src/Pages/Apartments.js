import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import MobileLogo from '../Components/MobileLogo/MobileLogo';

import useMobile from '../CustomHooks/useMobile';

const Apartments = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <MobileLogo />}
        <h1 className="header">Apartamenty</h1>
        <p className="apartments-info">
          <strong>klient:</strong> prodzina z dziećmi, pary
          <br />
          <strong>info:</strong> pokoje dla osób niepalących, WIFI, sejf, winda,
          DVBT
          <br />
          <strong>wyposażenie łazienki:</strong> ręcznik, mydełko, szampon
        </p>
        <p className="text text-apartments">
          W ofercie Grand Łeba znajdują się Apartamenty. Z okien rozpościera się
          widok na miasto Łeba lub kanał portowy Chełst. Na górnych
          kondygnacjach z okien pokoi dostrzec można linię brzegową morza
          Bałtyckiego.
          <br />
          <br />
          Z przyjemnością spełnimy Wasze życzenia, aby pobyt w Grand Łeba
          należał do niezapomnianych. Z myślą o rodzicach z dziećmi, możliwym
          jest przygotowanie łóżeczka niemowlęcego. Grand Łeba dysponuje również
          pokojami dwu osobowymi oraz apartamentami dwu sypialnianymi, istnieje
          możliwość dostawki.
          <br />
          <br />
          Oferujemy możliwość pobytu z małymi, nieuciążliwymi zwierzętami.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Apartments;
