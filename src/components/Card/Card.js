import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormControlLabel, Button } from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';
import './Card.styles.css';


function Card({image, price, beds, bath , sqft, line, listings, city, zipCode, state}) {
    return (
			<div className='card-container'>
				<div className='image-contianer'>
					<img src={image} alt='house' />
				</div>
				<div className='main-content'>
					<div className='body'>
						<p>${price}</p>
						<p>{line} {city}, {state} { zipCode}</p>

						<p>{beds} bds / {bath} ba / {sqft} sqft</p>
					</div>
					<div className='btn'>
							<Button variant='outlined' color='secondary' size='small'>
								View
							</Button>						
						<FormControlLabel
							control={
								<Checkbox
									className='heart-icon'
									icon={<FavoriteBorder />}
									checkedIcon={<Favorite />}
									name='checkedH'
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