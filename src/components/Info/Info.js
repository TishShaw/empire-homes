import React from 'react';
import image from '../../assets/images/iwood-R5v8Xtc0ecg-unsplash.jpeg';
import './Info.style.css';

function Info(props) {
    return (
			<div className='info'>
				<h1 className='info-header'>More about Today's News</h1>
				<div className='info-wrapper'>
					<div className='info-container'>
						<img src={image} className='info-image' />
						<h3 className='info-title'>Behind the Listing</h3>
						<p>
							{' '}
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dignissimos, fugiat.
						</p>
						<button className='infoBtn'>Learn More</button>
					</div>
					<div className='info-container'>
						<img src={image} className='img-fluid info-image' />
						<h3 className='info-title'>Behind the Listing</h3>
						<p>
							{' '}
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dignissimos, fugiat.
						</p>
						<button className='infoBtn'>Learn More</button>
					</div>
					<div className='info-container'>
						<img src={image} className='img-fluid info-image' />
						<h3 className='info-title'>Behind the Listing</h3>
						<p>
							{' '}
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dignissimos, fugiat.
						</p>
						<button className='infoBtn'>Learn More</button>
					</div>
				</div>
			</div>
		);
}

export default Info;