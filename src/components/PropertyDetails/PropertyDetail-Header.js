import Button from '@mui/material/Button';
import { PropertyContext } from '../Context/PropertyContext';
import './PropertyDetails-Header.styles.css';
import {useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

function PropertyDetailHeader({listing, price}) {
	const { listing_id } = useParams();

	const [listings, setListings] = useState([]);

	useEffect(() => {
		fetch(`https://us-real-estate.p.rapidapi.com/v2/for-sale?${listing_id}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_US_REAL_ESTATE_KEY,
			},
		})
			.then((response) => response.json())
			.then((response) => {
				setListings(response.data.home_search.results);
				console.log(response.data.home_search.results.list_price);
			})
			.catch((err) => {
				console.error(err);
			});
		}, []);
    return (
			<div className='prop-wrapper'>
				<div className='details-container'>
					<h1 className='prop-title'>
						
					</h1>
					<p className='price-prop'>${listings.list_price}</p>
					<p className='prop-breadcrumb'>
						{listings.description.beds}
						<span>Beds</span>/ {listings.description.baths}
						<span>Baths</span>/ {listings.description.sqft}
						<span>sq Ft</span>
					</p>
				</div>
				<div className='buttonEl'>
					<Button className='btn-header' variant='outlined' size='small'>
						Save
					</Button>
					<Button className='btn-header' variant='outlined' size='small'>
						Share
					</Button>
				</div>
			</div>
		);
}

export default PropertyDetailHeader;