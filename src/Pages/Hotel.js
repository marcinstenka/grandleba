import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';

const Hotel = () => {
	const isMobile = useMobile();
	const [cookies, setCookie] = useCookies(['cookies']);
	const handleCookie = () => {
		setCookie('Cookies', 'CookiesAccepted', { path: '/' });
	};

	useEffect(() => {
		if (!cookies.Cookies) {
			const cookiesBtn = document.querySelector('.cookies button');
			cookiesBtn.addEventListener('click', () => {
				cookiesBtn.parentElement.style.display = 'none';
			});
		}
	}, []);
	return (
		<>
			<Navbar isMobile={isMobile} />
			{!cookies.Cookies && (
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
