import { Link } from 'react-router-dom';
import MobileMenuScript from './MobileMenuScript';
import Logo from '../../assets/logo.png';
const NavbarMobile = () => {
  return (
    <nav className="navbar-mobile">
      <div className="mobile__hamburger">
        <div className="hamburger__line hamburger__line-top"></div>
        <div className="hamburger__line hamburger__line-mid"></div>
        <div className="hamburger__line hamburger__line-bottom"></div>
      </div>
      <input type="checkbox" className="navbar__checkbox" />
      <div className="mobile-menu">
        <ul>
          <li>
            <Link to="/">Hotel</Link>
          </li>
          <li>
            <Link to="/pokoje">Pokoje</Link>
          </li>
          <li>
            <Link to="/restauracja">DrinkBar</Link>
          </li>
          <li>
            <Link to="/cennik">Cennik</Link>
          </li>
          <li>
            <Link to="/dla-grup">Oferta Specjalna</Link>
          </li>
          <li>
            <Link to="/bezpieczny-pobyt">Bezpieczny pobyt</Link>
          </li>
        </ul>
        <div className="menu-logo">
          <img src={Logo} alt="Grand Łeba" />
          <h3>KOMFORTOWE NOCLEGI W CENTRUM ŁEBY</h3>
        </div>
      </div>
      <MobileMenuScript />
    </nav>
  );
};

export default NavbarMobile;
