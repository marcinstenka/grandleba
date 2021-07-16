import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hotel from './Pages/Hotel';
function App() {
  return (
    <BrowserRouter basename="/grandleba/">
      <Switch>
        <Route exact path="/" component={Hotel} />
        {/* <Route exact path="/o-mnie" component={About} />
        <Route exact path="/oferta" component={Offer} />
        <Route exact path="/kontakt" component={Contact} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
