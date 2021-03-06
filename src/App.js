import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useMobile from './CustomHooks/useMobile';
import Hotel from './Pages/Hotel';
import Rooms from './Pages/Rooms';
import Restaurant from './Pages/Restaurant';
import PriceList from './Pages/PriceList';
import SpecialOffer from './Pages/SpecialOffer';
import SafeStay from './Pages/SafeStay';
import NewInvestment from './Pages/NewInvestment';
import Apartments from './Pages/Apartments';
import Privacy from './Pages/Privacy';
import Contact from './Pages/Contact';
import Page404 from './Pages/Page404';

// swiper.js initialization
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import Aos from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([Navigation, Autoplay]);

function App() {
  const isMobile = useMobile();
  useEffect(() => {
    if (isMobile) {
      Aos.init();
    } else {
      Aos.init({ offset: 250 });
    }
  }, [isMobile]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Hotel} />
        <Route exact path="/pokoje" component={Rooms} />
        <Route exact path="/restauracja" component={Restaurant} />
        <Route exact path="/cennik" component={PriceList} />
        <Route exact path="/oferta-specjalna" component={SpecialOffer} />
        <Route exact path="/kontakt" component={Contact} />
        <Route exact path="/bezpieczny-pobyt" component={SafeStay} />
        <Route exact path="/nowa-inwestycja" component={NewInvestment} />
        <Route exact path="/apartamenty" component={Apartments} />
        <Route exact path="/polityka-prywatnosci" component={Privacy} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
