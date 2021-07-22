import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

import useMobile from '../CustomHooks/useMobile';

const Privacy = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container container-parking">
        {isMobile && <Logo />}
        <h1 className="header">POLITYKA PRYWATNOŚCI</h1>
        <p className="text text-parking">
          Informacja o danych osobowy dla gości Grand Łeba w Łebie
          <br />
          <br />
          <strong>1. Administrator danych</strong>
          <br />
          Administratorem danych osobowych gości hotelowych jest firma „Łeba
          Park” S.C. W. Słota, A. Becker z siedzibą w Nowęcinie przy ulicy
          Kolonijnej 24,84-360 Nowęcin.
          <br />
          <br />
          <strong>
            2. Cele przetwarzania danych osobowych gości hotelowych
          </strong>
          <br />
          Celem dla których Hotel przetwarza dane osobowe jest zawarcie i
          realizacja umowy o świadczenie usług hotelarskich. Ponadto celem
          przetwarzania danych osobowych przez Hotel jest:
          <br />
          <strong>2.1.</strong> dochodzenie ewentualnych roszczeń przez Hotel w
          związku z poniesioną przez Hotel szkodą wyrządzoną przez gościa, lub
          obrona przed roszczeniami gościa w stosunku do Hotelu,
          <br />
          <strong>2.2.</strong> udokumentowanie wykonania usługi dla celów
          podatkowych, <br />
          <strong>2.3.</strong> zapewnienie najwyższej jakości usług dla gości
          hotelowych.
          <br />
          <br />
          W przypadku, gdy gość wyraził zgodę na przetwarzanie danych osobowych
          w celach marketingowych, Hotel przetwarza dane w tym celu, tj. w celu
          kierowania informacji marketingowych i ofert o swoich produktach i
          usługach. Ponadto Hotel przetwarza dane osobowe gości gromadzone przez
          monitoring hotelowy w celu zapewnienia bezpieczeństwa gościom
          hotelowym i innym osobą przebywającym na terenie Hotelu.
          <br /> <br />
          <strong>3. Podstawa prawna przetwarzania danych osobowych</strong>
          <br />
          Podstawą prawną przetwarzania danych osobowych gościa pozyskanych
          przez Hotel jest umowa o świadczenie usług hotelarskich. Podstawą
          prawną przetwarzania danych gościa wykorzystywanych w celach
          marketingowych jest zgoda gościa. Hotel informuje, że zgoda ta może
          być w każdym momencie wycofana. Wycofanie zgody nie wpływa na ważność
          przetwarzania, które miało miejsce przed cofnięciem zgody.
          <br />
          Podstawą prawną przetwarzania danych osobowych gościa przez monitoring
          jest ochrona jego żywotnych interesów oraz ochrona żywotna ochrona
          innych osób fizycznych, jak również usprawiedliwiony cel
          administratora.
          <br /> <br />
          <strong>4. Komu mogą zostać przekazane dane osobowe?</strong>
          <br />
          Hotel przekazuje dane następującym kategoriom podmiotów:
          <br />
          <strong>4.1.</strong> firmom świadczącym usługi wsparcia IT hotelu
          oraz dostarczającym oprogramowanie informatyczne,
          <br />
          <strong>4.2.</strong> firmom księgowym świadczącym usługi obsługi
          księgowej, <br />
          <strong>4.3.</strong> firmom transportowym i taksówkarskim w sytuacji
          zamówienia przez gościa transportu lub przesyłki kurierskiej,
          <br />
          <strong>4.4.</strong> firmom (kancelariom) prawniczym świadczącym
          usługi doradztwa prawnego i zastępstwa procesowego.
          <br /> <br />
          <strong>5. Jak długo dane osobowe będą przetwarzane?</strong>
          <br />
          <strong>5.1.</strong> Dane osobowe:
          <br />
          <strong>5.1.1.</strong> pozyskane w związku z zawartą umową o
          świadczenie usług hotelarskich będą przetwarzane przez okres
          przedawnienia roszczeń podatkowych lub roszczeń cywilnoprawnych Hotelu
          lub gościa, w zależności które z tych zdarzeń nastąpi później,
          <br />
          <strong>5.1.2.</strong> pozyskane na podstawie zgody w celach
          marketingowych będą przetwarzane przez okres ważności zgody na cele
          marketingowe,
          <br />
          <strong>5.1.3.</strong> pozyskane w związku z monitoringiem będą
          przetwarzane przez 7 dni od dnia utrwalenia, a następnie zostaną
          trwale usunięte.
          <br />
          <strong>5.2.</strong> Prawa gościa w związku z przetwarzaniem danych
          osobowych:
          <br />
          <strong>5.2.1.</strong> Każdy gość ma prawo dostępu do danych
          osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.
          Ponadto, każdy gość ma prawo do wniesienia sprzeciwu wobec
          przetwarzania. Dostęp do danych jest możliwy w siedzibie Hotelu.
          Ponadto, Hotel udostępnia adres biuro@grandleba.pl za pomocą którego
          można kontaktować się w sprawie danych osobowych,
          <br />
          <strong>5.2.2.</strong> Wniesienie skargi w związku z przetwarzaniem
          danych osobowych, <br />
          <strong>5.2.3.</strong> Każdy gość ma prawo wniesienia skargi do
          organu nadzorczego, którym jest Generalny Inspektor Danych Osobowych,
          ul. Stawki 2 00-193 Warszawa.
          <br />
          <br />
          <strong>6.</strong>Czy podanie danych osobowych jest wymogiem umownym
          lub ustawowym ?<br />
          <strong>6.1.</strong> Każdy gość ma prawo wniesienia skargi do organu
          nadzorczego, którym jest Generalny Inspektor Danych Osobowych, ul.
          Stawki 2 00-193 Warszawa.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
