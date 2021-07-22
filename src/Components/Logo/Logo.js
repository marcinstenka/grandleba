import { Link } from 'react-router-dom';
import LogoLeba from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoLeba} alt="Grand Łeba" />
        <h3>KOMFORTOWE NOCLEGI W CENTRUM ŁEBY</h3>
      </Link>
    </div>
  );
};

export default Logo;
