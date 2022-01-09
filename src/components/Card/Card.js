import React from 'react';
import './Card.styles.css';


function Card({image, price, beds, bath , sqft}) {
    return (
			<div className='card-container'>
				<div className='image-contianer'>
					<img src={image} alt='house' />
				</div>
				<div className='main-content'>
					<div className='body'>
						<p>{price}</p>
						<p>1904 Barkley Ln, Michigan City, IN 46360</p>
						<p>{beds} bds / {bath} ba / {sqft} sqft</p>
					</div>
					<div className='btn'>
						<button>View more</button>
					</div>
				</div>
			</div>
		);
}

export default Card;