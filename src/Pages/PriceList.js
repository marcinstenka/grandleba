import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';

const PriceList = () => {
  // useEffect(() => {
  //   fetch('https://hotelnadmorskileba.pl/pricelist.json')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // });
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container price-list-container">
        {isMobile && <Logo />}
        <h1 className="header">{t('priceList-header')}</h1>
        <div className="mobile-tables">
          <div className="mobile-table">
            <div className="mobile-table-item">
              <h4>{t('priceList-type1')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price1')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>-</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>-</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>-</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type2')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price2')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price3')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price4')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price5')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type3')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price6')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price7')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price8')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price9')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type4')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price10')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price11')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price12')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price13')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type5')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price14')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price15')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price16')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price17')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type6')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price18')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price19')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price20')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price21')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type7')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price22')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price23')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price24')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price25')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type8')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price26')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price27')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price28')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price29')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type9')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price30')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price31')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price32')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price33')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type10')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price34')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price35')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price36')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price37')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type11')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price38')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price39')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price40')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price41')}</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-type12')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList-season1')}</h5>
                <h5>{t('priceList-price42')}</h5>
                <h5>{t('priceList-season2')}</h5>
                <h5>{t('priceList-price43')}</h5>
                <h5>{t('priceList-season3')}</h5>
                <h5>{t('priceList-price44')}</h5>
                <h5>{t('priceList-season4')}</h5>
                <h5>{t('priceList-price45')}</h5>
              </div>
            </div>
          </div>
          <p>{t('priceList1')}</p>
          <h3 className="header">{t('priceList2')}</h3>
          <div className="mobile-table">
            <div className="mobile-table-item">
              <h4>{t('priceList-season1')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList3')}</h5>
                <h5>17.09 - 28.05 {t('priceList4')}</h5>
                <h5>{t('priceList3')}</h5>
                <h5>3.05-26.05</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-season2')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList3')}</h5>
                <h5>26.05 - 07.06</h5>
                <h5>{t('priceList3')}</h5>
                <h5>27.08 - 17.09</h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-season3')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList3')}</h5>
                <h5>28.04 - 03.05</h5>
                <h5>{t('priceList3')}</h5>
                <h5>11.06 - 07.07 </h5>
              </div>
            </div>
            <div className="mobile-table-item">
              <h4>{t('priceList-season4')}</h4>
              <div className="table-item-grid">
                <h5>{t('priceList3')}</h5>
                <h5>07.06 - 11.06</h5>
                <h5>{t('priceList3')}</h5>
                <h5>07.07 - 27.08</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="tables">
          <table>
            <tr>
              <td>{t('priceList-header')} GRAND ŁEBA 2022/23</td>
              <td>{t('priceList-season1')}</td>
              <td>{t('priceList-season2')}</td>
              <td>{t('priceList-season3')}</td>
              <td>{t('priceList-season4')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type1')}</td>
              <td>{t('priceList-price1')}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>{t('priceList-type2')}</td>
              <td>{t('priceList-price2')}</td>
              <td>{t('priceList-price3')}</td>
              <td>{t('priceList-price4')}</td>
              <td>{t('priceList-price5')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type3')}</td>
              <td>{t('priceList-price6')}</td>
              <td>{t('priceList-price7')}</td>
              <td>{t('priceList-price8')}</td>
              <td>{t('priceList-price9')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type4')}</td>
              <td>{t('priceList-price10')}</td>
              <td>{t('priceList-price11')}</td>
              <td>{t('priceList-price12')}</td>
              <td>{t('priceList-price13')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type5')}</td>
              <td>{t('priceList-price14')}</td>
              <td>{t('priceList-price15')}</td>
              <td>{t('priceList-price16')}</td>
              <td>{t('priceList-price17')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type6')}</td>
              <td>{t('priceList-price18')}</td>
              <td>{t('priceList-price19')}</td>
              <td>{t('priceList-price20')}</td>
              <td>{t('priceList-price21')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type7')}</td>
              <td>{t('priceList-price22')}</td>
              <td>{t('priceList-price23')}</td>
              <td>{t('priceList-price24')}</td>
              <td>{t('priceList-price25')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type8')}</td>
              <td>{t('priceList-price26')}</td>
              <td>{t('priceList-price27')}</td>
              <td>{t('priceList-price28')}</td>
              <td>{t('priceList-price29')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type9')}</td>
              <td>{t('priceList-price30')}</td>
              <td>{t('priceList-price31')}</td>
              <td>{t('priceList-price32')}</td>
              <td>{t('priceList-price33')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type10')}</td>
              <td>{t('priceList-price34')}</td>
              <td>{t('priceList-price35')}</td>
              <td>{t('priceList-price36')}</td>
              <td>{t('priceList-price37')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type11')}</td>
              <td>{t('priceList-price38')}</td>
              <td>{t('priceList-price39')}</td>
              <td>{t('priceList-price40')}</td>
              <td>{t('priceList-price41')}</td>
            </tr>
            <tr>
              <td>{t('priceList-type12')}</td>
              <td>{t('priceList-price42')}</td>
              <td>{t('priceList-price43')}</td>
              <td>{t('priceList-price44')}</td>
              <td>{t('priceList-price45')}</td>
            </tr>
          </table>
          <p>{t('priceList1')}</p>
          <table>
            <tr>
              <td></td>
              <td>{t('priceList-season1')}</td>
              <td>{t('priceList-season2')}</td>
              <td>{t('priceList-season3')}</td>
              <td>{t('priceList-season4')}</td>
            </tr>
            <tr>
              <td>{t('priceList3')}</td>
              <td>
                17.09 - 28.04 <br /> {t('priceList4')}
              </td>
              <td>26.05 - 07.06</td>
              <td>28.04 - 03.05</td>
              <td>07.06 - 11.06</td>
            </tr>
            <tr>
              <td>{t('priceList3')}</td>
              <td>3.05 - 26.05</td>
              <td>27.08 - 17.09</td>
              <td>11.06 - 07.07</td>
              <td>07.07 - 27.08</td>
            </tr>
          </table>
        </div>
        <ul className="price-list-list">
          <li>{t('priceList5')}</li>
          <li>{t('priceList6')}</li>
          <li>{t('priceList7')}</li>
          <li>{t('priceList8')}</li>
          <li>{t('priceList9')}</li>
          <li>{t('priceList10')}</li>
          <li>{t('priceList11')}</li>
          <li>{t('priceList12')}</li>
          <li>{t('priceList13')}</li>
          <li>{t('priceList14')}</li>
          <li>{t('priceList15')}</li>
        </ul>
        <div className="text price-list-text">
          <h1>1.{t('priceList16')}</h1>
          <p>
            <strong>1.1</strong>
            {t('priceList17')} (recepcja@grandleba.pl)
          </p>
          <p>
            <strong>1.2</strong>
            {t('priceList18')}
          </p>
          <p>
            <strong>1.3</strong>
            {t('priceList19')}
          </p>
          <p>
            <strong>1.4</strong>
            {t('priceList20')}
          </p>
          <p>
            <strong>1.5</strong>
            {t('priceList21')}
          </p>
          <h1>2.{t('priceList22')}</h1>
          <p>
            <strong>2.1</strong>
            {t('priceList23')}
          </p>
          <p>
            <strong>2.2</strong>
            {t('priceList24')}
          </p>
          <p>
            <strong>2.3</strong>
            {t('priceList25')}
          </p>
          <p>
            <strong>2.4</strong>
            {t('priceList26')}
          </p>
          <p>
            <strong>{t('priceList27')}</strong>
          </p>
          <p>
            <strong>ŁEBA PARK s.c.</strong>
            <br />
            ul. Kolonijna 24
            <br />
            84-360 Nowęcin
            <br />
            <br />
            <strong>Pekao S.A.</strong>
            <br />
            <strong>SWIFT:</strong> PKOPPLPW
            <br />
            <strong>IBAN:</strong> PL 03 1240 5790 1111 0000 5507 9266
          </p>
          <p>
            <strong>2.5</strong>
            {t('priceList28')}
          </p>
          <p>
            <strong>2.6</strong>
            {t('priceList29')}
          </p>
          <p>
            <strong>2.7</strong>
            {t('priceList30')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PriceList;
