import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt as fasPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <span>
          Zadzwoń do nas lub <br />
          napisz wiadomość:
        </span>
        <div className="footer-number">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={fasPhoneAlt} />
            <a href="tel:+48 723 724 722">+48 723 724 722</a>
          </div>
        </div>
        <div className="footer-mail">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={farEnvelope} />
            <a href="mailto:recepcja@grandleba.pl">recepcja@grandleba.pl</a>
          </div>
        </div>
        <div className="footer-mail">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={farEnvelope} />
            <a href="mail:biuro@grandleba.pl">biuro@grandleba.pl</a>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-section">
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/">HOTEL</Link>
            </li>
            <li>
              <Link to="/nowa-inwestycja">NOWA INWESTYCJA</Link>
            </li>

            <li>
              <Link to="/parking">PARKING</Link>
            </li>
            <li>
              <Link to="/dla-grup">OFERTA DLA GRUP</Link>
            </li>
            <li>
              <Link to="/polityka-prywatnosci">POLITYKA PRYWATNOŚCI</Link>
            </li>
            <li>
              <Link to="/kontakt">KONTAKT</Link>
            </li>
          </ul>
        </div>
        <div className="footer-privacy">
          GRAND ŁEBA – komfortowe noclegi w centum Łeby © 2021 Wszelkie prawa
          zastrzeżone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
