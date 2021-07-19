import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hotel from './Pages/Hotel';
import Rooms from './Pages/Rooms';
import Restaurant from './Pages/Restaurant';

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
        {/* <Route exact path="/o-mnie" component={About} />
        <Route exact path="/oferta" component={Offer} />
        <Route exact path="/kontakt" component={Contact} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
