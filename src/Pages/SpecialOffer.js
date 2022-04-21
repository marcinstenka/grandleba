import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';

const ForGroups = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        {/* <div className="special-offer-section">
          <h3 className="header special-offer-header">WIELKANOC NAD MORZEM</h3>
          <p className="subtext">15-18.04.2022 (3 noce)</p>
          <ul className="special-offer-list">
            <li className="special-offer-list-bold">15.04 Wielki Piątek</li>
            <ul className="special-offer-list">
              <li>Przyjazd gości</li>
              <li>Obiadokolacja w formie bufetu 17:00 – 20:00</li>
            </ul>
            <li className="special-offer-list-bold">16.04 Wielka Sobota</li>
            <ul className="special-offer-list">
              <li>Śniadanie - 8:00 – 10:30</li>
              <li>
                Święcenie pokarmów (koszyczki ze święconką przygotowuje obsługa)
                - od 10:30
              </li>
              <li>Transport meleksem do Kościoła na świecenie pokarmów</li>
              <li>Obiadokolacja w formie bufetu - 17:00 – 20:00</li>
            </ul>
            <li className="special-offer-list-bold">
              17.04 Niedziela Wielkanocna
            </li>
            <ul className="special-offer-list">
              <li>
                Uroczyste śniadanie wielkanocne z tradycyjnymi potrawami i
                ciastami wielkanocnymi w formie bufetu – 8:00 – 11:00
              </li>
              <li>
                Całodzienny bufet słodki przy kawie i herbacie – 8:00 – 20:00
              </li>
              <li>
                Świąteczna obiadokolacja wielkanocna w formie bufetu – 17:00 -
                20:00
              </li>
            </ul>
            <li className="special-offer-list-bold">
              18.04 Poniedziałek Wielkanocny
            </li>
            <ul className="special-offer-list">
              <li>Uroczyste śniadanie wielkanocne – 8:00 – 11:00</li>
              <li>
                Pożegnanie i wyjazd Gości – możliwość wymeldowania do godziny
                15:00
              </li>
            </ul>
          </ul>
          <p className="text">
            Napoje (woda, soki), kawa, herbata do każdego z posiłków.
            <br />
            Koszt pobytu osoby dorosłej w pokoju 2 os. – 850 zł (1700 zł pobyt
            dla dwóch osób).
            <br />
            Koszt pobytu osoby dorosłej w pokoju 1 os. – 1100 zł.
            <br />
            Dopłata do pokoju z balkonem 50 zł/doba.
          </p>
        </div> */}
        <h1 className="header special-offer-header">{t('specialOffer1')}</h1>
        <p className="text">
          {t('specialOffer2')}
          <br />
          <br />
          {t('specialOffer3')}
          <br />
          <br />
          {t('specialOffer4')}
          <br />
          <br />
          {t('specialOffer5')}
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
