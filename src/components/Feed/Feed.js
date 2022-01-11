import { useContext } from 'react';
import {  Link } from 'react-router-dom';
import { PropertyContext } from '../Context/PropertyContext';
import Card from '../Card/Card';
import './Feed.styles.css';



const Feed = () => {
	const { filteredData } = useContext(PropertyContext)
		
	
	if(!filteredData) {
		return <h2>Loading ...</h2>
	} else {
		return (
			<div className='wrapper-grid'>
				<div className='card-comp-container'>
					{filteredData.map((listing) => (
						<Link
							to={`/${listing.property_id}`}
							key={listing.listing_id}> 
							<Card
								image={listing.primary_photo ? listing.primary_photo.href : 'no image'}
								price={listing.list_price}
								beds={listing.description.beds}
								bath={listing.description.baths}
								sqft={listing.description.sqft}
								line={listing.location.address.line}
								filteredData={filteredData}
								listing={listing}
							/>
						</Link>
					))}
				</div>
			</div>
		);
	}
}	


export default Feed;