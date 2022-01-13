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
						src={
							listing.photos
								? listing.photos[0].href
								: 'https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png'
						}
						alt='house'
						className='img-detail'
					/>
				</div>
				<hr></hr>
				<div className='details-description'>
					<h2 className='title-overview'>Property Overview</h2>
					<p className='overview-text'>{listing.description.text}</p>
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
						<p className='type-value item'>{listing.description.type}</p>
						<p className='status-value item'>{listing.status}</p>
						<p className='county-value item'>{listing.location.county.name}</p>
						<p className='year-value item'>{listing.description.year_built}</p>
						<p className='beds-value item'>{listing.description.beds}</p>

						<p className='full-baths-value item'>{listing.description.baths_full}</p>
						<p className='half-baths-value item'>
							{listing.description.bath_half
								? listing.description.baths_half
								: 'N/A'}
						</p>
						<p className='sqft-value item'>{listing.description.sqft}</p>
						<p className='listId-value item'>{listing.listing_id}</p>
					</div>
				</div>
				<hr></hr>
				<ContactForm listing={listing} />
			</div>
		</div>
	);
};

export default PropertyDetails;
