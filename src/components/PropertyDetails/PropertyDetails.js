import CarouselContainer from '../../components/Carousel/CarouselContainer';
import './Property.styles.css';

const PropertyDetails = ({ listing }) => {
	if (!listing) {
		return null;
	}
	return (
		<div>
			<div className='details-stats'>
				<div className='image-section'>
					<CarouselContainer listing={listing} className='img-detail' />
				</div>
				<hr></hr>
				<div className='details-description'>
					<h2 className='title-overview'>Property Overview</h2>
					<p className='overview-text'>
						{listing.description && listing.description.text}
					</p>
				</div>
				<div className='property-facts'>
					<hr></hr>
					<h2 className='features-title'>Property Features</h2>
					<div className='grid-features'>
						<p className='type'>Type</p>
						<p className='status'>Status</p>
						<p className='county'>County</p>
						<p className='beds'>Beds</p>
						<p className='full-baths'>Full Baths</p>
						<p className='sqft'>Sq. Ft.</p>
						<p className='listId'>Listing Id</p>
						<p className='type-value item'>{listing.home_type}</p>
						<p className='status-value item'>{listing.status}</p>
						<p className='county-value item'>
							{listing.location && listing.location.county.name}
						</p>

						<p className='beds-value item'>
							{listing.description && listing.description.beds}
						</p>

						<p className='full-baths-value item'>
							{listing.description && listing.description.baths}
						</p>

						<p className='sqft-value item'>
							{listing.description && listing.description.sqft}
						</p>
						<p className='listId-value item'>{listing.listing_id}</p>
					</div>
				</div>
				<hr></hr>
			</div>
		</div>
	);
};

export default PropertyDetails;
