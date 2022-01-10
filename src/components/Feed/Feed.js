import { useEffect, useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PropertyContext } from '../Context/PropertyContext';
import Card from '../Card/Card';
import './Feed.styles.css';
import PropertyDetailHeader from '../PropertyDetails/PropertyDetail-Header';


const Feed = () => {
		const {listings, setListings, filteredData} = useContext(PropertyContext)
	
	
	
	
	if(!listings) {
		return <h2>Loading ...</h2>
	} else {
		return (
			<div className='wrapper-grid'>
				<div className='card-comp-container'>
					{filteredData.map((listing) => (
						<Link
							to={`details/:${listing.listing_id}`}
							key={listing.listing_id}
							component={<PropertyDetailHeader />}>
							<Card
								image={listing.primary_photo ? listing.primary_photo.href : 'no image'}
								price={listing.list_price}
								beds={listing.description.beds}
								bath={listing.description.baths}
								sqft={listing.description.sqft}
								line={listing.location.address.line}
								listings={listings}
							/>
						</Link>
					))}
				</div>
			</div>
		);
	}
}	


export default Feed;