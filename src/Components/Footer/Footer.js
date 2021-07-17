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
            <a href="mail:recepcja@grandleba.pl">recepcja@grandleba.pl</a>
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
              <a href="">HOTEL</a>
            </li>
            <li>
              <a href="">NOWA INWESTYCJA</a>
            </li>
            <li>
              <a href="">APARTAMENTY</a>
            </li>
            <li>
              <a href="">OFERTA DLA GRUP</a>
            </li>
            <li>
              <a href="">POLITYKA PRYWATNOŚCI</a>
            </li>
            <li>
              <a href="">KONTAKT</a>
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
