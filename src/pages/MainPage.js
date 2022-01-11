import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetailHeader from '../components/PropertyDetails/PropertyDetail-Header';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';

function MainPage() {
	const { listing_id } = useParams();

	const [listing, setListing] = useState([]);

	useEffect(() => {
		console.log(listing_id);
		fetch(
			`https://us-real-estate.p.rapidapi.com/for-sale?property_id=${listing_id}`,
			{
				method: 'GET',
				params: { property_id: listing_id },
				headers: {
					'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => {
				setListing(res.data.results);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

    return (
			<div>
				<PropertyDetailHeader listing={listing} />
				<PropertyDetails  listing={listing} />
			</div>
		);
}

export default MainPage;