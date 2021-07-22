import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import Footer from '../Components/Footer/Footer';
import useMobile from '../CustomHooks/useMobile';

const SafeStay = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header">Bezpieczny pobyt</h1>
        <p className="text ">
          Zapewnienie bezpieczeństwa naszym Gościom jest dla nas kwestią
          pierwszorzędną. W związku z zaistniałą sytuacją epidemii COVID-19,
          wprowadziliśmy szereg dodatkowych zasad bezpieczeństwa i higieny,
          które pozwolą Państwu cieszyć się bezpiecznym i komfortowym pobytem.
        </p>
        <p className="text safe-stay-text">
          I. Każdy Pracownik Grand Łeba zobligowany jest do:
        </p>
        <ul className="safe-stay-list">
          <li>
            dokonania samooceny stanu zdrowia przed pojawieniem się w pracy
            zgodnie z www.pacjent.gov.pl/koronawirus/sprawdz-objawy;
          </li>
          <li>
            w przypadku wystąpienia temperatury przekraczającej 38°C lub
            wystąpienia objawów takich jak kaszel, katar, duszności, problemy z
            oddychaniem, Pracownicy nie zostają dopuszczeni do pracy i wskazuje
            się im zalecenie postępowania zgodnego z wytycznymi GIS;
          </li>
          <li>
            stosowania środków ochrony osobistej takich jak przyłbice, maseczki
            i rękawiczki;
          </li>
          <li>
            zachowania minimalnej odległości 2 metrów od innych pracowników;
          </li>
          <li>
            przeprowadzania systematycznej dezynfekcji miejsca pracy ze
            zwróceniem szczególnej uwagi na powierzchnie użytkowe (telefon,
            klawiatura, myszka, kalkulator, włączniki świateł, biurko);
          </li>
        </ul>
        <p className="text safe-stay-text">
          II. Strefy ogólne (korytarze, hotele, toalety):
        </p>
        <ul className="safe-stay-list">
          <li>
            strefy ogólne każdego obiektu noclegowego stanowią ogólnodostępną
            przestrzeń publiczną, w której obowiązuje nakaz poruszania się w
            maseczkach zarówno przez Pracowników jak i Gości obiektu (zgodnie z
            wytycznymi GIS https://www.pacjent.gov.pl/bez-maski-ani-rusz);
          </li>
          <li>
            w obiekcie mogą przebywać tylko osoby będące zameldowanymi Gośćmi;
          </li>
          <li>
            w strefie wejścia do obiektu, zlokalizowana jest informacja o
            maksymalnej ilości osób mogących przebywać w recepcji;
          </li>
          <li>
            w tej samej części znajdują się płyny do dezynfekcji rąk, zgodnie z
            zaleceniami oraz z instrukcją wykonania skutecznej dezynfekcji rąk;
          </li>
          <li>
            bieżące dezynfekowanie, nie rzadziej niż co godzinę, ogólnych
            toalet, wind, blatu recepcyjnego (po każdym gościu) klamek, poręczy,
            uchwytów oraz innych często dotykanych powierzchni;
          </li>
          <li>
            w każdej toalecie publicznej na terenie obiektu w widocznym miejscu
            udostępniona jest instrukcja jak poprawnie i skutecznie myć ręce;
          </li>
          <li>
            w strefie wejścia do toalet znajdują się żele do dezynfekcji rąk,
            zgodnie z zaleceniami wraz z instrukcją wykonania skutecznej
            dezynfekcji rąk;
          </li>
          <li>
            prowadzona jest regularna dezynfekcja wind zgodnie z wytycznymi.
          </li>
          <li>
            w strefie wejścia do wind znajdują się żele do dezynfekcji rąk,
            zgodnie z zaleceniami wraz z instrukcją wykonania skutecznej
            dezynfekcji rąk;
          </li>
          <li>
            wprowadzono zalecenie poruszania się windą przez maksymalnie 2 osoby
            przy zachowaniu bezpiecznej odległości (nie dotyczy zameldowanych w
            jednym pokoju);
          </li>
          <li>
            regularne wietrzenie przestrzeni wspólnych w celu zapewnienia
            jeszcze lepszego obiegu świeżego powietrza;
          </li>
          <li>
            {' '}
            systematyczna kontrola jakości wykonywanej pracy w zakresie
            dezynfekcji stref ogólnych, poprzez wykonywanie regularnych kontroli
            jakości pracy naszego Personelu przez Kadrę Kierowniczą;
          </li>
        </ul>
        <p className="text safe-stay-text">III. W strefie Recepcji:</p>
        <ul className="safe-stay-list">
          <li>
            znajdują się informację o maksymalnej ilości osób mogących przebywać
            w danej części obiektu;
          </li>
          <li>
            dla Gości dostępne są do pobrania jednorazowe maseczki oraz
            rękawiczki;
          </li>
          <li>
            zamontowano specjalną osłonę w celu zapewnienia bezpiecznej
            przestrzeni;
          </li>
          <li>
            minimalizujemy czas jaki jest konieczny do realizacji procedury
            meldunku w Recepcji, do jak najkrótszej obecności naszych Gości w
            tej strefie;
          </li>
          <li>
            dostępne są numery telefonów do Sanepidu oraz adresy najbliższych
            aptek;
          </li>
          <li>
            preferowane jest realizowanie płatności bezgotówkowych, nasze
            terminale płatnicze dezynfekowane są po każdym użyciu;
          </li>
          <li>
            podczas podpisywania karty meldunkowej nasi Goście korzystają z
            długopisów, które dezynfekujemy po każdym ich użyciu;
          </li>
          <li>
            karty do pokoi oraz klucze są dezynfekowane po każdym użyciu przez
            Gości;
          </li>
        </ul>
        <p className="text safe-stay-text">IV. Strefa pokoi hotelowych:</p>
        <ul className="safe-stay-list">
          <li>
            wprowadzenie zasady świadomego rozmieszczania Gości w strukturze
            Obiektu co oznacza, że minimalizujemy ilość Gości przebywających w
            pokojach na danym piętrze i korytarzu zgodnie z zaleceniami
            wskazanymi przez Ministerstwo Rozwoju na stronie
            https://www.gov.pl/web/rozwoj/hotele-i-inne-miejsca-noclegowe;
          </li>
          <li>
            wykonywanie ozonowanie pokoju oraz łazienki po każdym pobycie;
          </li>
          <li>
            wprowadzenie zakazu używania przez gości suszarek nadmuchowych;
          </li>
          <li>
            serwis pokoi odbywa się tylko na życzenie Gości pod ich nieobecność
            w godzinach 8:00 do 14:00, po umieszczeniu przez Gości na klamce
            odpowiedniej zawieszki, która dostępna jest z każdym z pokoi;
          </li>
        </ul>
        <p className="text safe-stay-text">V. Strefa Restauracji/Baru:</p>
        <ul className="safe-stay-list">
          <li>
            śniadania oraz obiadokolacje odbywają się w formie serwowanej;
          </li>
          <li>
            tace, stoły oraz przyprawniki są dezynfekowane po każdym gościu;
          </li>
          <li>
            podczas podpisywania rachunku przy zamówieniach na konto pokoju w
            ramach pobytu, nasi Goście korzystają z długopisów, które
            dezynfekujemy po każdym ich użyciu;
          </li>
          <li>
            nasza obsługa rozlokowuje gości zgodnie z zalecanymi odstępami;
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default SafeStay;
