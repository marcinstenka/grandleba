import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';

const Hotel = () => {
  const isMobile = useMobile();

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <Footer />
    </>
  );
};

export default Hotel;
