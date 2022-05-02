import React from 'react';
import image from '../../assets/images/ralph-ravi-kayden-MyeOnGcibCQ-unsplash.jpeg';
import imageTwo from '../../assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpeg';
import './Banner.style.css';

function BannerSearch(props) {
    return (
			<div className='banner-search'>
				<div className='banner-search-content'>
					<img src={image} alt='' className='banner-search-img' />
					<div className='banner-search-context'>
						<h1>Get quality listing</h1>
						<p className='banner-search-paragraph'>
							Our network’s unique tools give you more when looking for your
							next home. More data. More properties. More neighborhood
							information. See for yourself.{' '}
						</p>
						<button className='banner-searchBtn'>START YOUR SEARCH</button>
					</div>
				</div>
				<div className='banner-search-content-two'>
					<div className='banner-search-context-two'>
						<h1>Get quality listing</h1>
						<p className='banner-search-paragraph'>
							Our network’s unique tools give you more when looking for your
							next home. More data. More properties. More neighborhood
							information. See for yourself.{' '}
						</p>
						<button className='banner-searchBtn'>START YOUR SEARCH</button>
					</div>
					<img src={imageTwo} alt='' className='banner-search-imgTwo' />
				</div>
			</div>
		);
}

export default BannerSearch;