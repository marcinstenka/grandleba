import Logo from '../../assets/logo.png';
const HeroMobile = () => {
  return (
    <div className="hero-container">
      <div className="hero-logo">
        <img src={Logo} alt="Grand Łeba" />
        <h3>KOMFORTOWE NOCLEGI W CENTRUM ŁEBY</h3>
      </div>
    </div>
  );
};

export default HeroMobile;
