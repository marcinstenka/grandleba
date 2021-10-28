import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';

const ForGroups = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
        <h1 className="header special-offer-header">{t('specialOffer1')}</h1>
        <p className="text">
          {t('specialOffer2')}
          <br />
          <br />
          {t('specialOffer3')}
          <br />
          <br />
          {t('specialOffer4')}
          <br />
          <br />
          {t('specialOffer5')}
          <br />
          <br />
          <strong>email: biuro@grandleba.pl</strong>
          <br />
          <strong>
            <a href="tel:723-724-884">tel.: 723-724-884</a>
          </strong>
        </p>

        <h1 className="header special-offer-header">{t('specialOffer6')}</h1>
        <p className="text">
          {t('specialOffer7')}
          <br />
          <br />
          {t('specialOffer8')}
          <br />
          {t('specialOffer9')}
          <br />
        </p>
        <p class="text">{t('specialOffer10')}</p>
        <ul className="special-offer-list">
          <li>{t('specialOffer11')}</li>
          <li>{t('specialOffer12')}</li>
          <li>{t('specialOffer13')}</li>
          <li>{t('specialOffer14')}</li>
          <li>{t('specialOffer15')}</li>
          <li>{t('specialOffer16')}</li>
          <li>{t('specialOffer17')}</li>
        </ul>
        <p className="text">
          {t('specialOffer18')}
          <br />
          {t('specialOffer19')}
          <br />
          {t('specialOffer20')}
          <br />
          <br />
          {t('specialOffer21')}
          <br />
          {t('specialOffer22')}
          <br />
          {t('specialOffer23')}
          <br />
          <br />
          {t('specialOffer24')}
          <br />
          <br />
          {t('specialOffer25')}
          <br />
          {t('specialOffer26')}
        </p>
        <p className="text text-warning">{t('specialOffer27')}</p>

        <h1 className="header special-offer-header">{t('specialOffer28')}</h1>
        <p className="text">
          {t('specialOffer29')}
          <br />
          <br />
          {t('specialOffer30')}
        </p>
        <p class="text">{t('specialOffer31')}</p>
        <ul className="special-offer-list">
          <li>{t('specialOffer32')}</li>
          <li>{t('specialOffer33')}</li>
        </ul>
        <p class="text">{t('specialOffer34')}</p>
        <ul className="special-offer-list">
          <li>{t('specialOffer35')}</li>
          <li>{t('specialOffer36')}</li>
          <li>{t('specialOffer37')}</li>
          <li>{t('specialOffer38')}</li>
          <li>{t('specialOffer39')}</li>
          <li>{t('specialOffer40')}</li>
          <li>{t('specialOffer41')}</li>
        </ul>
        <p className="text">
          {t('specialOffer42')}
          <br />
          {t('specialOffer43')}
          <br />
          {t('specialOffer44')}
          <br />
          <br />
          {t('specialOffer45')}
          <br />
          <br />
          {t('specialOffer25')}
          <br />
          {t('specialOffer26')}
        </p>
        <p className="text text-warning">{t('specialOffer27')}</p>
      </div>
      <Footer />
    </>
  );
};

export default ForGroups;
