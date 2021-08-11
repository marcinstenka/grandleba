import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

const Contact = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();

  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container container-contact">
        {isMobile && <Logo />}
        <h1 className="header">{t('contact1')}</h1>
        <div className="contact-map">
          <iframe
            title="Mapa Grand Łeba"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9208.514544802283!2d17.556427!3d54.760125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe7832684a4abd%3A0x56aca0137cb8b538!2sNad+Uj%C5%9Bciem+6%2C+84-360+%C5%81eba!5e0!3m2!1spl!2spl!4v1515326966026"
          ></iframe>
        </div>
        <p className="text">
          {t('contact2')}
          <br />
          <br />
          {t('contact3')}
          <br />
          <strong>
            Grand Łeba
            <br />
            ul. Nad Ujściem 6<br />
            84-360 Łeba
          </strong>
          <br />
          <br />
          <a href="tel:+48 723 724 722">
            <strong>{t('contact4')}</strong>+48 723 724 722
          </a>
          <br />
          <a href="mailto: recepcja@grandleba.pl">
            <strong>E-mail:</strong>: recepcja@grandleba.pl
          </a>
          <br />
          <br />
          {t('contact5')}
          <br />
          <a href="mailto:biuro@grandleba.pl">
            {' '}
            <strong>e-mail:</strong> biuro@grandleba.pl
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
