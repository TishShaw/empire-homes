import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.styles.css';
import { useContext, useState } from 'react';
import {
	collection,
	getDocs,
	setDoc,
	query,
	where,
	doc,
	updateDoc,
	arrayUnion,
	arrayRemove,
	onSnapshot,
	FieldValue,
} from 'firebase/firestore';
import { db, auth } from '../../Firebase';
import ContextData from '../../context/Context';

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
	const { user } = useContext(ContextData);
	const [fav, setFav] = useState(false);
	const [favArr, setFavsArr] = useState([]);

	const handleClick = () => {
		setFav(!fav);

		if (!fav) {
			console.log('favorited: ' + id, address);
			addToFavorites(id);
			ghu(id);
		} else {
			console.log('unFavorite ' + id, address);
		}
	};

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(?=(\d{3})+(?!\d)))/g, ',');
	};

	const addToFavorites = async (id) => {
		onSnapshot(usersCollection, (snapshot) => {
			setFavsArr(
				snapshot.docs.map((doc) => {
					if (
						doc._document.data.value.mapValue.fields.user_uid.stringValue ===
						user
					) {
						const favRef = {
							id: doc.id,
							viewing: false,
							...doc.data(),
						};
						let favClone = favRef.favorites;
						let favCloneRef = [...favClone];
						return favCloneRef;
					} else {
						console.log(false);
					}
				})
			);
		});
	};

	const usersCollection = collection(db, 'users');
	useEffect(() => {
		onSnapshot(usersCollection, (snapshot) => {
			setFavsArr(
				snapshot.docs.map((doc) => {
					if (
						doc._document.data.value.mapValue.fields.user_uid.stringValue ===
						user
					) {
						console.log(true);
						const favRef = {
							id: doc.id,
							viewing: false,
							...doc.data(),
						};
						let favClone = favRef.favorites;
						let favCloneRef = [...favClone];
						return favCloneRef;
					} else {
						console.log(false);
					}
				})
			);
		});
		ghu();
	}, []);

	const ghu = (id) => {
		favArr.map((fav) => {
			const ff = [...fav, id];
			setFavsArr(ff)
			console.log(favArr);
		});
	};

	return (
		<div className='card_content-wrapper'>
			<Card sx={{ maxWidth: 345 }} key={key} className='cardEl'>
				<div className='imgDiv'>
					<Link to={`/${id}`}>
						<CardMedia
							component='img'
							height='140'
							image={image}
							alt='house image'
							className='cardImg'
						/>
					</Link>
					<div
						onClick={(e) => {
							e.preventDefault();
							handleClick(id);
						}}>
						{fav ? (
							<FavoriteIcon
								className='heartIcon'
								style={{ fontSize: '35px', color: 'red' }}
							/>
						) : (
							<FavoriteBorderIcon
								className='heartIcon'
								style={{ fontSize: '35px' }}
							/>
						)}
					</div>
				</div>
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
