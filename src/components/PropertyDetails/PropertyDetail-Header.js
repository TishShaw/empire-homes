import Button from '@mui/material/Button';
import { PropertyContext } from '../Context/PropertyContext';
import './PropertyDetails-Header.styles.css';
import {useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

function PropertyDetailHeader({listing, price}) {
	const { listing_id } = useParams();

	const [listings, setListings] = useState([]);

	useEffect(() => {
		fetch(`http://127.0.0.1:5500/src/listings2.json/${listing_id}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_US_REAL_ESTATE_KEY,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				setListings(res);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
		}, []);
    return (
			<div className='prop-wrapper'>
				{listings.map((listing) => {
					return (
						<div className='details-container'>
							<h1 className='prop-title'>{}</h1>
							<p className='price-prop'>${listing.list_price}</p>
							<p className='prop-breadcrumb'>
								<span>Beds</span>/<span>Baths</span>/<span>sq Ft</span>
							</p>
						</div>
					);
				})}
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