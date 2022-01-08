import React from 'react';
import './Card.styles.css';
function Card({item, image, price, decription}) {
    return (
			<div className='card-container'>
				<div className='image-contianer'>
					<img src={item.image} alt='house' />
				</div>
				<div className='main-content'>
					<div className='body'>
						<p>{item.price}</p>
						<p>{item.decription}</p>
					</div>
					<div className='btn'>
						<button>View more</button>
					</div>
				</div>
			</div>
		);
}

export default Card;