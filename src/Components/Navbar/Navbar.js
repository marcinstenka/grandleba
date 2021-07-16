import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';
const Navbar = ({ isMobile }) => {
  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
