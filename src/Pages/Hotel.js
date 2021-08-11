import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';

const Hotel = () => {
	const isMobile = useMobile();
	const [cookies, setCookie] = useCookies(['CookiesGrandLeba']);
	const handleCookie = () => {
		setCookie('CookiesGrandLeba', 'CookiesAccepted', { path: '/' });
	};

	useEffect(() => {
		if (!cookies.CookiesGrandLeba) {
			const cookiesBtn = document.querySelector('.cookies button');
			cookiesBtn.addEventListener('click', () => {
				cookiesBtn.parentElement.style.display = 'none';
			});
		}
	}, []);
	return (
		<>
			<Navbar isMobile={isMobile} />
			{!cookies.CookiesGrandLeba && (
				<div className='cookies'>
					<p>Ta strona wykorzystuje pliki cookies.</p>{' '}
					<button onClick={handleCookie}>X</button>
				</div>
			)}
			<Hero isMobile={isMobile} />
			<Footer />
		</>
	);
};

export default Hotel;
