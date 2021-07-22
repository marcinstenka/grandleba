import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import useMobile from '../CustomHooks/useMobile';

const ForGroups = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header for-groups-header">
          OFERTA DLA GRUP ZORGANIZOWANYCH
        </h1>
        <p className="text">
          Grand Łeba to doskonałe miejsce do wypoczynku zarówno dla gości
          indywidualnych jak i dla grup zorganizowanych, które szukają
          kameralnego miejsca nad polskim morzem. Nasz obiekt to idealny wybór,
          jeśli chcą Państwo zorganizować szkolenie, konferencje, spotkanie
          integracyjne lub inną imprezę okolicznościową.
          <br />
          <br />
          Takich okazji może być wiele, wszystko zależy od Państwa chęci oraz
          możliwości. Zapewniamy, że odpowiemy na wszelkie Państwa sugestie, aby
          sprostać Państwa oczekiwaniom.
          <br />
          <br />
          Oferujemy szeroki zakres usług od samych noclegów ze śniadaniami po
          pobyty z pełnym wyżywieniem, wynajęciem sali, przerwami kawowymi
          podczas konferencji itd.
          <br />
          <br />
          W celu uzyskania jakichkolwiek informacji oraz przygotowania
          indywidualnej oferty prosimy o kontakt.
          <br />
          <br />
          <strong>email: biuro@grandleba.pl</strong>
          <br />
          <strong>
            <a href="tel:723-724-884">tel.: 723-724-884</a>
          </strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ForGroups;
