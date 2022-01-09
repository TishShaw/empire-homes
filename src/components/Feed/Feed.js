import {useEffect, useContext} from 'react';
import './Feed.styles.css';
import Card from '../Card/Card';
import HOUSE_DATA from '../../HouseData';
import { PropertyContext } from '../Context/PropertyContext';


function Feed() {
	const { listings, setListings, filteredData, handleFilter } = useContext(PropertyContext);
	useEffect(() => {
		setListings(HOUSE_DATA);
		console.log(listings);
	});
		if(!listings) {
			return <h2>Loading...</h2>
		} else {
			return (
				<div className='wrapper-grid'>
					<div className='card-comp-container'>
						{filteredData.map((listing) => (
							<Card
								key={listing.listing_id}
								image={listing.primary_photo}
								price={listing.list_price}
								beds={listing.beds}
								bath={listing.baths}
								sqft={listing.lot_sqft}
								onChange={handleFilter}
								
								
							/>
						))}
					</div>
				</div>
			);
		}	
}

export default Feed;