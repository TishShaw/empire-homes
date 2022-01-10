// import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import PropertyDetailHeader from './PropertyDetail-Header';



// const PropData = () => {
	

// 	if (!listing) {
// 		return <h2>Loading ...</h2>;
// 	} else {
// 		return (
// 			<div className='wrapper-grid'>
// 				<div className='card-comp-container'>
// 					{listing.map((listing) => (
// 						<PropertyDetailHeader
// 							image={listing.primary_photo}
// 							price={listing.list_price}
// 							beds={listing.description.beds}
// 							bath={listing.description.baths}
// 							sqft={listing.description.sqft}
// 							line={listing.location.address.line}
// 							listing={listing}
// 							key={listing.listing_id}
// 						/>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}
// };	

// export default PropData;