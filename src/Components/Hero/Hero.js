import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle as fasCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faUtensils as fasUtensils } from '@fortawesome/free-solid-svg-icons';
import { faComment as fasComment } from '@fortawesome/free-solid-svg-icons';
import { faUsers as fasUsers } from '@fortawesome/free-solid-svg-icons';

import Logo from '../Logo/Logo';
import HotelImage1 from '../../assets/hotel-image1.jpg';
import HotelImage2 from '../../assets/hotel-image2.jpg';
import HotelImage3 from '../../assets/hotel-image3.jpg';
import HotelImage4 from '../../assets/hotel-image4.jpg';
import HotelImage5 from '../../assets/hotel-image5.jpg';
import HotelImage6 from '../../assets/hotel-image6.jpg';
import HotelImage7 from '../../assets/hotel-image7.jpg';
import HeroImage1 from '../../assets/hero-image1.jpg';
import HeroImage2 from '../../assets/hero-image2.jpg';
import HeroImage3 from '../../assets/hero-image3.jpg';

const Hero = ({ isMobile }) => {
	const { t } = useTranslation();
	return (
		<div className='container'>
			{isMobile && <Logo />}
			<div className='hero-slider'>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					navigation
					loop
					autoplay={{ delay: 2000 }}
				>
					<SwiperSlide>
						<img src={HotelImage1} alt='Hotel Grand Łeba' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={HotelImage2} alt='Hotel Grand Łeba' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={HotelImage3} alt='Taras restauracji Grand Łeba' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={HotelImage4} alt='Bar restauracji Grand Łeba' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={HotelImage5} alt='Restauracja Grand Łeba' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={HotelImage6} alt='Taras restauracji Grand Łeba' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={HotelImage7} alt='Recepcja Grand Łeba' />
					</SwiperSlide>
				</Swiper>
			</div>
			<div data-aos='fade-up' className='hero-welcome'>
				<h1>{t('hotel1')}</h1>
				<br />
				<h3>{t('hotel2')}</h3>
			</div>
			<div className='hero-images'>
				<div data-aos='fade-up' className='hero-image'>
					<div className='image-wrapper'>
						<img src={HeroImage1} alt='Plaża bardzo blisko hotelu!' />
					</div>

					<h5>{t('hotel3')}</h5>
					<p>{t('hotel4')}</p>
				</div>
				<div data-aos='fade-up' className='hero-image'>
					<div className='image-wrapper'>
						<img
							src={HeroImage2}
							alt='Nasz hotel systematycznie otrzymuje wysokie oceny w Guest Review Awards od kilku lat!'
						/>
					</div>

					<h5>
						9,5 - Guest Review Awards 2020, <br />
						9,5 - Guest Review Awards 2019, <br />
						9,4 - Guest Review Award 2018
					</h5>
					<p>{t('hotel5')}.</p>
				</div>
				<div data-aos='fade-up' className='hero-image'>
					<div className='image-wrapper'>
						<img
							src={HeroImage3}
							alt='Zwiedzaj wielki park dinazaurów w Łebie!'
						/>
					</div>

					<h5>{t('hotel6')}</h5>
					<p>{t('hotel7')}</p>
				</div>
			</div>
			<div className='hero-info'>
				<h2 data-aos='fade-up'>{t('hotel8')}</h2>
				<h4 data-aos='fade-up'>{t('hotel9')}</h4>
				<div className='info-wrapper'>
					<div data-aos='fade-up' className='info-item'>
						<div className='info-item__header'>
							<h3>{t('hotel12')}</h3>
							<FontAwesomeIcon icon={fasUtensils} />
						</div>
						<p>{t('hotel13')}</p>
					</div>
					<div data-aos='fade-up' className='info-item'>
						<div className='info-item__header'>
							<h3>{t('hotel14')}</h3>
							<FontAwesomeIcon icon={fasComment} />
						</div>
						<p>{t('hotel15')}</p>
					</div>
					<div data-aos='fade-up' className='info-item'>
						<div className='info-item__header'>
							<h3>
								Grand Łeba - <br /> Adults Only (13+)
							</h3>
							<FontAwesomeIcon icon={fasUsers} />
						</div>
						<p>{t('hotel16')}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
