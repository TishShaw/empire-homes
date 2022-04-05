import React from 'react';
import Card from '../Card/Card';
function PropertyListings({ currentListing }) {
	console.log(currentListing);

	// const getListing = () => {
	// 	let result = [];
	// 	let listingsOnPage = [];

	// 	currentListing.map((listing, id) => {
	// 		return listingsOnPage.push(
	// 				<Card
	// 					key={listing.id}
	// 					title={listing.title}
	// 					address={listing.address}
	// 					city={listing.city}
	// 					state={listing.state}
	// 					zipcode={listing.zipcode}
	// 					price={listing.price}
	// 					home_type={listing.home_type}
	// 					beds={listing.bedrooms}
	// 					bath={listing.bathrooms}
	// 					sqft={listing.sqft}
	// 					image={listing.listing_photo}
	// 					slug={listing.slug}
	// 				/>

	// 		);
	// 	});

	// 	for (let i = 0; i < currentListing.length; i ++) {
	// 		result.push(
	// 			<div className='row'>
	// 				<div classame='col-1-of-6'> {listingsOnPage[i]}</div>
	// 				<div classame='col-1-of-6'>
	// 					{listingsOnPage[i + 1] ? listingsOnPage[i + 1] : null}
	// 				</div>
	// 				<div classame='col-1-of-6'>
	// 					{listingsOnPage[i + 2] ? listingsOnPage[i + 1] : null}
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// 	return result;
	// };

	return (
		// <div className='propertyListings'>{getListing()}</div>;
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
