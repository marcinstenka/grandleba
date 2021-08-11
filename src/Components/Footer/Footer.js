import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt as fasPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-section">
        <span>
          {t('footer1')} <br />
          {t('footer2')}
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
              <Link to="/nowa-inwestycja">{t('footer3')}</Link>
            </li>

            <li>
              <Link to="/parking">{t('footer4')}</Link>
            </li>
            <li>
              <Link to="/dla-grup">{t('footer5')}</Link>
            </li>
            <li>
              <Link to="/polityka-prywatnosci">{t('footer6')}</Link>
            </li>
            <li>
              <Link to="/bezpieczny-pobyt">{t('footer7')}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-privacy">{t('footer8')}</div>
      </div>
    </footer>
  );
};

export default Footer;
