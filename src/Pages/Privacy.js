import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

const Privacy = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container container-parking">
        {isMobile && <Logo />}
        <h1 className="header">{t('privacy1')}</h1>
        <p className="text text-parking">
          {t('privacy2')}
          <br />
          <strong>1.{t('privacy3')}</strong>
          <br />
          {t('privacy4')}
          <br />
          <br />
          <strong>2.{t('privacy5')}</strong>
          <br />
          {t('privacy6')}
          <br />
          <strong>2.1.</strong>
          {t('privacy7')}
          <br />
          <strong>2.2.</strong>
          {t('privacy8')}
          <br />
          <strong>2.3.</strong>
          {t('privacy9')}
          <br />
          <br />
          {t('privacy10')}
          <br /> <br />
          <strong>3.{t('privacy11')}</strong>
          <br />
          {t('privacy12')}
          <br />
          {t('privacy13')}
          <br /> <br />
          <strong>4.{t('privacy14')}</strong>
          <br />
          {t('privacy15')}
          <br />
          <strong>4.1.</strong>
          {t('privacy16')}
          <br />
          <strong>4.2.</strong>
          {t('privacy17')}
          <br />
          <strong>4.3.</strong>
          {t('privacy18')}
          <br />
          <strong>4.4.</strong>
          {t('privacy19')}
          <br /> <br />
          <strong>5.{t('privacy20')}</strong>
          <br />
          <strong>5.1.</strong>
          {t('privacy21')}
          <br />
          <strong>5.1.1.</strong>
          {t('privacy22')}
          <br />
          <strong>5.1.2.</strong>
          {t('privacy23')}
          <br />
          <strong>5.1.3.</strong>
          {t('privacy24')}
          <br />
          <strong>5.2.</strong>
          {t('privacy25')}
          <br />
          <strong>5.2.1.</strong>
          {t('privacy26')}
          <br />
          <strong>5.2.2.</strong>
          {t('privacy27')}
          <br />
          <strong>5.2.3.</strong>
          {t('privacy28')}
          <br />
          <br />
          <strong>6.</strong>
          {t('privacy29')}
          <br />
          <strong>6.1.</strong>
          {t('privacy30')}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
