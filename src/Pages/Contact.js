import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

import useMobile from '../CustomHooks/useMobile';

const Contact = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container container-contact">
        {isMobile && <Logo />}
        <h1 className="header">Kontakt</h1>
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9208.514544802283!2d17.556427!3d54.760125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe7832684a4abd%3A0x56aca0137cb8b538!2sNad+Uj%C5%9Bciem+6%2C+84-360+%C5%81eba!5e0!3m2!1spl!2spl!4v1515326966026"></iframe>
        </div>
        <p className="text">
          Dokładamy wszelkich starań, aby Państwa pobyt w Grand Łeba był
          niezapomniany.
          <br />
          <br />W razie jakichkolwiek pytań zapraszamy do kontaktu
          telefonicznego lub pocztowego pod adresem:
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
            <strong>Telefon:</strong>+48 723 724 722
          </a>
          <br />
          <a href="mailto: recepcja@grandleba.pl">
            <strong>E-mail</strong>: recepcja@grandleba.pl
          </a>
          <br />
          <br />
          kontakt w sprawie uwag, sugestii, współpracy:
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
