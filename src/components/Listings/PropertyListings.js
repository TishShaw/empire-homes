import React from 'react';
import Card from '../Card/Card';
function PropertyListings({ currentListing }) {
	console.log(currentListing);
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				
			}}>
			{currentListing.map((listing) => (
				<Card
					key={listing.id}
					id={listing.id}
					title={listing.title}
					address={listing.address}
					city={listing.city}
					state={listing.state}
					zipcode={listing.zipcode}
					price={listing.price}
					home_type={listing.home_type}
					beds={listing.bedrooms}
					bath={listing.bathrooms}
					sqft={listing.sqft}
					image={listing.listing_photo}
					slug={listing.slug}
					status={listing.sale_type}
				/>
			))}
		</div>
	);
}

export default PropertyListings;
