import ContactForm from '../contact-form/ContactForm';
import './Property.styles.css';


const PropertyDetails = ({ listing }) => {
	
	if (!listing) {
		return null;
	}
	return (
		<div>
			<div className='details-stats'>
				<div className='image-section'>
					<img
						className='img-detail'
						 src=''
						alt='house-detail-image'
					/>
				</div>
				<hr></hr>
				<div className='details-description'>
					<h2 className='title-overview'>Property Overview</h2>
					<p className='overview-text'>
						{listing.description.text}
					</p>
				</div>
					<div className='property-facts'>
					<hr></hr>
					<h2 className='features-title'>Property Features</h2>
					<div className='grid-features'>
						<p className='type'>Type</p>
						<p className='status'>Status</p>
						<p className='county'>County</p>
						<p className='year'>Year Built</p>
						<p className='beds'>Beds</p>
						<p className='full-baths'>Full Baths</p>
						<p className='half-baths'>Half Baths</p>
						<p className='sqft'>Sq. Ft.</p>
						<p className='listId'>Listing Id</p>
						<p className='type-value'>{listing.description.type}</p>
						<p className='status-value'>{listing.status}</p>
						 <p className='county-value'>{listing.location.city.county.name}</p>
						<p className='year-value'>{listing.description.year_built}</p> 					
						<p className='beds-value'>{listing.description.beds}</p>
						
						<p className='full-baths-value'>{listing.description.baths_full}</p>
						<p className='half-baths-value'>{listing.description.baths_half}</p>
						<p className='sqft-value'>{listing.description.sqft}</p> 
						<p className='listId-value'>{listing.listing_id}</p> 
					</div>
				</div>
				<hr></hr>
				<ContactForm listing={listing} />
			</div>
		</div>
	);
};

export default PropertyDetails;
