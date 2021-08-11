import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LogoLeba from '../../assets/logo.png';

const Logo = () => {
  const { t } = useTranslation();
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoLeba} alt="Grand Łeba" />
        <h3>{t('logo')}</h3>
      </Link>
    </div>
  );
};

export default Logo;
