import React from 'react';
import './Banner.style.css';
function Banners(props) {
    return (
			<div className='banner'>
				<div className='banner-container'>
					<div className='banner-container-section one col-1'>
						<h2 className='banner-title-one'>Consulting Services</h2>
						<p className='banner-paragraph'>
							Looking for advice through the home buying or selling process ?
							Let's begin to conduct the proper research to help achieve your
							goals in a timely and cost-effective way.
						</p>
						<button className='bannerBtn'>Learn More</button>
					</div>
					<div className='banner-container-section two col-2'>
						<h2 className='banner-title-two'>Property Management</h2>
						<p className='banner-paragraph'>
							Are you a rental property owner? 
							Let us help manage your property. We offer full service management
							for residential homes.
						</p>
						<button className='bannerBtn'>Learn More</button>
					</div>
					<div className='banner-container-section one col-3'>
						<h2 className='banner-title-three'>Buying & Selling</h2>
						<p className='banner-paragraph'>
							Local agents price will help get your home priced right and make it shine
							online. Get started with a free consultation.
						</p>
						<button className='bannerBtn'>Learn More</button>
					</div>
				</div>
			</div>
		);
}

export default Banners;