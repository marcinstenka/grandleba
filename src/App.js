import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import Hotel from './Pages/Hotel';
import Rooms from './Pages/Rooms';
import Restaurant from './Pages/Restaurant';
import PriceList from './Pages/PriceList';
import ForGroups from './Pages/ForGroups';
import SafeStay from './Pages/SafeStay';
import NewInvestment from './Pages/NewInvestment';
import Apartments from './Pages/Apartments';
import Parking from './Pages/Parking';
import Privacy from './Pages/Privacy';
import Contact from './Pages/Contact';

// swiper.js initialization
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);

function App() {
  return (
    <BrowserRouter basename="/grandleba/">
      <Switch>
        <Route exact path="/" component={Hotel} />
        <Route exact path="/pokoje" component={Rooms} />
        <Route exact path="/restauracja" component={Restaurant} />
        <Route exact path="/cennik" component={PriceList} />
        <Route exact path="/dla-grup" component={ForGroups} />
        <Route exact path="/bezpieczny-pobyt" component={SafeStay} />
        <Route exact path="/nowa-inwestycja" component={NewInvestment} />
        <Route exact path="/apartamenty" component={Apartments} />
        <Route exact path="/parking" component={Parking} />
        <Route exact path="/polityka-prywatnosci" component={Privacy} />
        <Route exact path="/kontakt" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
