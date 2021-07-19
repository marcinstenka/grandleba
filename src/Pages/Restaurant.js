import Navbar from '../Components/Navbar/Navbar';
import MobileLogo from '../Components/MobileLogo/MobileLogo';

import RestaurantImage from '../assets/restaurant-image.jpg';
import useMobile from '../CustomHooks/useMobile';
import Footer from '../Components/Footer/Footer';

const Restaurant = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <MobileLogo />}
        <h1 className="header">Restauracja for You</h1>
        <div className="restaurant-image">
          <img
            src={RestaurantImage}
            alt="Nasza restauracja na pewno przypadnie Ci do gustu."
          />
        </div>
        <p className="text">
          Zachęcamy Państwa do odwiedzin naszego klimatycznego i nastrojowego
          Drink Baru, który dostępny jest przez cały rok, również dla osób nie
          będących gośćmi Grand Łeba. Znajdziecie w nim Państwo szeroki wybór
          alkoholi najwyższej klasy i klasycznych koktajli... Koneserzy mogą
          liczyć także na starannie wyselekcjonowane kawy, herbaty oraz
          pochodzące ze słynnych włoskich winnic wysokogatunkowe wina.
          <br />
          Podczas cieplejszych dni mają Państwo również do dyspozycji zaciszny
          taras z widokiem na kanał Chełst.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
