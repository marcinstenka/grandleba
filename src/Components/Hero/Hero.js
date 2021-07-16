import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';
const Hero = ({ isMobile }) => {
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default Hero;
