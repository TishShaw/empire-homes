import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.styles.css';

function ListingCard({
	key,
	id,
	address,
	price,
	beds,
	bath,
	sqft,
	city,
	zipcode,
	state,
	slug,
	status,
	image,
}) {
	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(?=(\d{3})+(?!\d)))/g, ',');
	};

	return (
		<div className='card_content-wrapper'>
			<Card sx={{ maxWidth: 345 }} key={key}>
				<Link to={`/${id}`}>
					<CardMedia
						component='img'
						height='140'
						image={image}
						alt='house image'
					/>
				</Link>
				<CardContent>
					<Typography variant='h6' color='text.secondary' component='div'>
						Single-Family Home
					</Typography>
					<Typography gutterBottom variant='h5' component='div'>
						${numberWithCommas(price)}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{address} {city}, {state} {zipcode}
					</Typography>
				</CardContent>
				<CardActions
					style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button
						size='small'
						style={{
							backgroundColor: 'rgb(253, 242, 244)',
							color: 'rgb(226, 81, 114)',
						}}>
						{status}
					</Button>

					<div>
						{beds}
						<i className='fa-solid fa-bed icon'></i>
						{bath}
						<i className='fa-solid fa-bath icon'></i>
						{sqft}
						<i className='fa-solid fa-mountain-sun icon'></i>
					</div>
				</CardActions>
			</Card>
		</div>
	);
}

export default ListingCard;
