import React from 'react';
import { SliderData } from '../data/SliderData';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Banners from '../components/Banner/Banners';
import BannerSearch from '../components/Banner/BannerSearch';
import './Homepage.style.css';
import Hero from '../components/Hero/Hero';
import Area from '../components/Area/Area';
import Info from '../components/Info/Info';
import Location from '../components/Location/Location';
import ScrollToTop from '../components/ScrollToTop';

function Homepage(props) {
	return (
		<div className='homepage'>
			{/* <Header /> */}
			<ScrollToTop />
			<Hero Slides={SliderData} />
			<Banners />
			<BannerSearch />
			{/* <Area /> */}
			<Location />
			<Info />
		</div>
	);
}

export default Homepage;
