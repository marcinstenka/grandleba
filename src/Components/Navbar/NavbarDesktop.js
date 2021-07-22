import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
const NavbarDesktop = () => {
  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-nav-link">
            Hotel
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokoje" exact activeClassName="active-nav-link">
            Pokoje
          </NavLink>
        </li>
        <li>
          <NavLink to="/apartamenty" exact activeClassName="active-nav-link">
            Apartamenty
          </NavLink>
        </li>
        <li>
          <NavLink to="/restauracja" exact activeClassName="active-nav-link">
            DrinkBar
          </NavLink>
        </li>
        <li>
          <NavLink to="/cennik" exact activeClassName="active-nav-link">
            Cennik
          </NavLink>
        </li>
        <li>
          <NavLink to="/dla-grup" exact activeClassName="active-nav-link">
            Oferta Specjalna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bezpieczny-pobyt"
            exact
            activeClassName="active-nav-link"
          >
            Bezpieczny pobyt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
