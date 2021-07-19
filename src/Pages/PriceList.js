import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import MobileLogo from '../Components/MobileLogo/MobileLogo';

import useMobile from '../CustomHooks/useMobile';

const PriceList = () => {
  const isMobile = useMobile();

  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container price-list-container">
        {isMobile && <MobileLogo />}
        <h1 className="header">Cennik</h1>
        <div className="mobile-tables">
          <div className="mobile-table">
            <div className="mobile-table-item">
              <h4>pokój 1 osobowy</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>130 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>-</h5>
                <h5>Sezon średni +</h5>
                <h5>-</h5>
                <h5>Sezon wysoki</h5>
                <h5>-</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>pokój 2 osobowy z balkonem z widokiem na kanał Chełst</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>230 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>320 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>390 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>450 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>pokój 2 osobowy z widokiem na kanał</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>210 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>270 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>350 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>400 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>pokój 2 osobowy </h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>200 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>260 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>330 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>390 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>pokój 2 osobowy z tarasem z widokiem na kanał*</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>180 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>250 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>290 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>340 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>pokój 2 osobowy *</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>160 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>220 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>280 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>330 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>apartament 4 osobowy</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>400 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>570 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>570 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>690 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>apartament 4 osobowy z balkonem z widokiem na kanał</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>400 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>570 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>570 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>690 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>
                apartament z dużym tarasem 3 osobowy z widokiem na kanał Chełst*
              </h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>380 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>490 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>490 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>610 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>
                apartament z dużym tarasem 2 osobowy z widokiem na kanał Chełst*
              </h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>340 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>450 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>450 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>570 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>apartament bez tarasu*</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>350 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>460 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>460 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>550 zł/doba</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>apartament bez tarasu*</h4>
              <div className="table-item-grid">
                <h5>Sezon niski</h5>
                <h5>310 zł/doba </h5>
                <h5>Sezon średni</h5>
                <h5>420 zł/doba</h5>
                <h5>Sezon średni +</h5>
                <h5>420 zł/doba</h5>
                <h5>Sezon wysoki</h5>
                <h5>510 zł/doba</h5>
              </div>
            </div>
          </div>
          <p>* pokój o mniejszym metrażu, skosy</p>
          <h3 className="mobile-table-header">Terminy</h3>
          <div className="mobile-table">
            <div className="mobile-table-item">
              <h4>Sezon niski</h4>
              <div className="table-item-grid">
                <h5>obowiązuje w terminie:</h5>
                <h5>19.09-30.04 (z wyłączeniem pakietów)</h5>
                <h5>obowiązuje w terminie:</h5>
                <h5>3.05-28.05</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>Sezon średni</h4>
              <div className="table-item-grid">
                <h5>obowiązuje w terminie:</h5>
                <h5>28.05-2.06</h5>
                <h5>obowiązuje w terminie:</h5>
                <h5>6.06-25.06</h5>
                <h5>obowiązuje w terminie:</h5>
                <h5>22.08-19.09</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>Sezon średni +</h4>
              <div className="table-item-grid">
                <h5>obowiązuje w terminie:</h5>
                <h5>30.04-3.05</h5>
                <h5>obowiązuje w terminie:</h5>
                <h5>2.06-6.06 </h5>
                <h5>obowiązuje w terminie:</h5>
                <h5>25.06-10.07 </h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>Sezon wysoki</h4>
              <div className="table-item-grid">
                <h5>obowiązuje w terminie:</h5>
                <h5>10.07-22.08</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="tables">
          <table>
            <tr>
              <td>CENNIK GRAND ŁEBA 2021</td>
              <td>SEZON NISKI</td>
              <td>SEZON ŚREDNI</td>
              <td>SEZON ŚREDNI +</td>
              <td>SEZON WYSOKI</td>
            </tr>
            <tr>
              <td>pokój 1 osobowy</td>
              <td>130 zł/dobę</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>pokój 2 osobowy z balkonem z widokiem na kanał Chełst</td>
              <td>230 zł/dobę</td>
              <td>320 zł/dobę</td>
              <td>390 zł/dobę</td>
              <td>450 zł/dobę</td>
            </tr>
            <tr>
              <td>pokój 2 osobowy / widokiem na kanał</td>
              <td>230 zł/dobę</td>
              <td>270 zł/dobę</td>
              <td>350 zł/dobę</td>
              <td>400 zł/dobę</td>
            </tr>
            <tr>
              <td>pokój 2 osobowy</td>
              <td>200 zł/dobę</td>
              <td>260 zł/dobę</td>
              <td>330 zł/dobę</td>
              <td>390 zł/dobę</td>
            </tr>
            <tr>
              <td>pokój 2 osobowy z tarasem z widokiem na kanał*</td>
              <td>180 zł/dobę</td>
              <td>250 zł/dobę</td>
              <td>290 zł/dobę</td>
              <td>340 zł/dobę</td>
            </tr>
            <tr>
              <td>pokój 2 osobowy*</td>
              <td>160 zł/dobę</td>
              <td>220 zł/dobę</td>
              <td>280 zł/dobę</td>
              <td>330 zł/dobę</td>
            </tr>
            <tr>
              <td>apartament 4 osobowy</td>
              <td>400 zł/dobę</td>
              <td>570 zł/dobę</td>
              <td>570 zł/dobę</td>
              <td>690 zł/dobę</td>
            </tr>
            <tr>
              <td>apartament 4 osobowy z balkonem z widokiem na kanał</td>
              <td>400 zł/dobę</td>
              <td>570 zł/dobę</td>
              <td>570 zł/dobę</td>
              <td>690 zł/dobę</td>
            </tr>
            <tr>
              <td>
                apartament 3 osobowy z dużym tarasem z widokiem na kanał Chełst*
              </td>
              <td>380 zł/dobę</td>
              <td>490 zł/dobę</td>
              <td>490 zł/dobę</td>
              <td>610 zł/dobę</td>
            </tr>
            <tr>
              <td>
                apartament 2 osobowy z dużym tarasem z widokiem na kanał Chełst*
              </td>
              <td>340 zł/dobę</td>
              <td>450 zł/dobę</td>
              <td>450 zł/dobę</td>
              <td>570 zł/dobę</td>
            </tr>
            <tr>
              <td>apartament 3 osobowy bez tarasu*</td>
              <td>350 zł/dobę</td>
              <td>460 zł/dobę</td>
              <td>460 zł/dobę</td>
              <td>550 zł/dobę</td>
            </tr>
            <tr>
              <td>apartament 2 osobowy bez tarasu*</td>
              <td>310 zł/dobę</td>
              <td>420 zł/dobę</td>
              <td>420 zł/dobę</td>
              <td>510 zł/dobę</td>
            </tr>
          </table>
          <p>* pokój o mniejszym metrażu, skosy</p>
          <table>
            <tr>
              <td></td>
              <td>SEZON NISKI</td>
              <td>SEZON ŚREDNI</td>
              <td>SEZON ŚREDNI +</td>
              <td>SEZON WYSOKI</td>
            </tr>
            <tr>
              <td>obowiązuje w terminie:</td>
              <td>19.09-30.04 (z wyłączeniem pakietów)</td>
              <td>28.05-2.06</td>
              <td>30.04-3.05</td>
              <td>10.07-22.08</td>
            </tr>
            <tr>
              <td>obowiązuje w terminie:</td>
              <td>3.05-28.05</td>
              <td>6.06-25.06</td>
              <td>2.06-6.06</td>
              <td>-</td>
            </tr>
            <tr>
              <td>obowiązuje w terminie:</td>
              <td>-</td>
              <td>22.08-19.09</td>
              <td>25.06-10.07</td>
              <td>-</td>
            </tr>
          </table>
        </div>
        <ul className="price-list-list">
          <li>
            doba rozpoczyna się od godziny 15:00 trwa do godziny 11:00 dnia
            następnego
          </li>
          <li>
            w cenę pokoju wliczona jest opłata klimatyczna i 8% stawka VAT
          </li>
          <li>płatność za pobyt pobierana jest w dniu meldunku</li>
          <li>
            oferent zastrzega sobie możliwość zmiany ceny w trakcie
            obowiązującej taryfy
          </li>
          <li>cena pokoju zawiera śniadanie</li>
          <li>istnieje możliwość wykupienia obiadokolacji w cenie 69 zł</li>
          <li>dostawka w cenie 100 zł/doba</li>
          <li>parking płatny 20 zł doba (brak możliwości rezerwacji)</li>
          <li>
            przedłużenie doby hotelowej 100 zł (opcja dostępna tylko w przypadku
            dostępności pokoi)
          </li>
          <li>podane ceny są wartościami brutto</li>
          <li>cena za 1 dobę pobytu małego zwierzęcia - 50 zł</li>
        </ul>
        <div className="text price-list-text">
          <h1>1. REZERWACJA POBYTU ODBYWA SIĘ WEDŁUG PONIŻSZYCH ZASAD</h1>
          <p>
            <strong>1.1</strong> Rezerwacji można dokonać telefonicznie + 48 723
            724 722 lub mailem (recepcja@grandleba.pl)
          </p>
          <p>
            <strong>1.2</strong> Po otrzymaniu potwierdzenia dostępności terminu
            należy wpłacić opłatę rezerwacyjną w wysokości 40% sumarycznej kwoty
            pobytu.
          </p>
          <p>
            <strong>1.3</strong> Opłatę rezerwacyjną należy wpłacić w terminie 3
            dni roboczych gdy do terminu rezerwacji jest mniej niż 21 dni, 7 dni
            gdy od daty potwierdzenia rezerwacji do terminu jest więcej niż 21
            dni.
          </p>
          <p>
            <strong>1.4</strong> Po otrzymaniu wymaganej wpłaty rezerwacyjnej,
            rezerwacja staje się gwarantowana, o czym informujemy Państwa
            telefonicznie bądź mailowo.
          </p>
          <p>
            <strong>1.5</strong> Pozostałą kwotę należy uregulować w dniu
            przyjazdu. W dniu wyjazdu lub każdego dnia regulują Państwo
            dodatkowe zobowiązania wynikające z zamówień dodatkowych w trakcie
            pobytu.
          </p>
          <h1>
            2. WARUNKI REZYGNACJI Z REZERWACJI (Indywidualnych i pakietowych)
          </h1>
          <p>
            <strong>2.1</strong> Jeżeli od rezerwacji do terminu pobytu jest
            więcej niż 60 dni zawracamy opłatę rezerwacyjną w całości, lub można
            przenieść ją na inny termin, uzgodniony z recepcją hotelu.
          </p>
          <p>
            <strong>2.2</strong> Jeżeli rezygnacja z rezerwacji następuje w
            terminie do 60 dni przed zarezerwowanym pobytem, opłaty
            rezerwacyjnej nie zwracamy.
          </p>
          <p>
            <strong>2.3</strong> Bez kosztowa zmiana rezerwacji możliwa jest na
            14 dni przed planowaną datą przyjazdu (przy uwzględnieniu
            dostępności pokoi hotelowych). Każdorazowa zmiana wymaga
            wygenerowania nowego potwierdzenia rezerwacji. Skrócenie pobytu
            traktowane jest jako anulacja rezerwacji i wymaga opłaty za cały
            wcześniej zarezerwowany termin.
          </p>
          <p>
            <strong>2.4</strong> Wpłata opłaty rezerwacyjnej na wskazany nr
            konta lub bezpośrednio w recepcji jest równoznaczna z akceptacją
            „Warunków rezygnacji z rezerwacji”.
          </p>
          <p>
            <strong>Dane do przelewu</strong>
          </p>
          <p>
            <strong>ŁEBA PARK s.c.</strong>
            <br />
            ul. Kolonijna 24
            <br />
            84-360 Nowęcin
            <br />
            <br />
            <strong>konto Pekao S.A.</strong>
            <br />
            <strong>SWIFT:</strong> PKOPPLPW
            <br />
            <strong>IBAN:</strong> PL 03 1240 5790 1111 0000 5507 9266
          </p>
          <p>
            <strong>2.5</strong> Zwrot środków możliwy jest jedynie na konto, z
            którego został dokonany przelew.
          </p>
          <p>
            <strong>2.6</strong> Zwrot środków na kartę możliwy jest jedynie na
            tę kartę, z której zostały pobrane środki.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PriceList;
