import React from 'react';
import { SliderData } from '../../data/SliderData';
import BannerSearch from '../../components/Banner/BannerSearch';
import Location from '../../components/Location/Location';
import ScrollToTop from '../../hocs/ScrollToTop';
import Banners from '../../components/Banner/Banners';
import Hero from '../../components/Hero/Hero';
import './Homepage.style.css';

function Homepage(props) {

	return (
		<div className='homepage'>			
			<ScrollToTop />
			<Hero Slides={SliderData} />
			<Banners />
			<BannerSearch />
			<Location />
		</div>
	);
}

export default Homepage;
