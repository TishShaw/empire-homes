import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Card.styles.css';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormControlLabel, Button } from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';


function Card({image, price, beds, bath , sqft, listings, filteredData}) {
	const handleFavorites=(event)=> {
		event.preventDefault();
		filteredData.map((item) => {
			console.log(item);
		
		})
	}
    return (
			<div className='card-container'>
				<div className='image-contianer'>
					<img src={image} alt='house' />
				</div>
				<div className='main-content'>
					<div className='body'>
						<p>${price}</p>
						<p>1904 Barkley Ln, Michigan City, IN 46360</p>
						<p>
							{beds} bds / {bath} ba / {sqft} sqft
						</p>
					</div>
					<div className='btn'>
						<Link to='/name' className='link'>
							<Button variant='outlined' color='secondary' size='small'>
								View
							</Button>
						</Link>
						<FormControlLabel
							control={
								<Checkbox
									className='heart-icon'
									icon={<FavoriteBorder />}
									checkedIcon={<Favorite />}
									name='checkedH'
									onClick={handleFavorites}
									value={listings}
								/>
							}
						label='Like'
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;