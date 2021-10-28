import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LogoLeba from '../../assets/logo.png';

import PlIcon from './../../assets/pl-icon.png';
import GbIcon from './../../assets/gb-icon.png';
import DeIcon from './../../assets/de-icon.png';
const NavbarDesktop = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <div className="logo-container">
        <div className="logo">
          <Link to="/">
            <img src={LogoLeba} alt="Grand Łeba" />
            <h3>{t('logo')}</h3>
          </Link>
        </div>
      </div>
      <div className="translation-icons">
        <div
          className="translation-icon"
          onClick={() => i18next.changeLanguage('pl')}
        >
          <img src={PlIcon} alt="Polska wersja językowa stony" />
        </div>
        <div
          className="translation-icon"
          onClick={() => i18next.changeLanguage('en')}
        >
          <img src={GbIcon} alt="English language version of the website" />
        </div>
        <div
          className="translation-icon"
          onClick={() => i18next.changeLanguage('de')}
        >
          <img src={DeIcon} alt="Deutsche Sprachversion der Website" />
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-nav-link">
            {t('nav1')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokoje" exact activeClassName="active-nav-link">
            {t('nav2')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/apartamenty" exact activeClassName="active-nav-link">
            {t('nav3')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/restauracja" exact activeClassName="active-nav-link">
            {t('nav4')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/cennik" exact activeClassName="active-nav-link">
            {t('nav5')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/oferta-specjalna"
            exact
            activeClassName="active-nav-link"
          >
            {t('nav6')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/kontakt" exact activeClassName="active-nav-link">
            {t('nav7')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
