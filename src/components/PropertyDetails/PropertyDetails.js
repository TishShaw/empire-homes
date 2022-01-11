import ContactForm from '../contact-form/ContactForm';
import './Property.styles.css';

const PropertyDetails = ({ listing }) => {
	
	return (
		<div>
			<div className='details-stats'>
				<div className='image-section'>
					<img
						className='img-detail'
						src={
							listing.primary_photo ? listing.primary_photo.href : 'no image'
						}
						alt=''
					/>
				</div>
				<hr></hr>
				<div className='details-description'>
					<h2 className='title-overview'>Property Overview</h2>
					<p className='overview-text'>
						{listing.property_overview ? listing.property_overview : ''}
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
						<p className='type-value'>{listing.display_property_type}</p>
						{listing.prop_common ? <p className='status-value'>{listing.prop_common.status}</p> : ''}
						{listing.address ? <p className='county-value'>{listing.address.county}</p> : ''}
						{listing.description ? <p className='year-value'>{listing.description.year_built}</p> : ''}
						{listing.description ? (
							<p className='beds-value'>{listing.description.beds}</p>
						) : null}
						<p className='full-baths-value'>{listing.description}</p>
						{listing.baths_half ? (
							<p className='half-baths-value'>
								{listing.description.baths_half}
							</p>
						) : null}
						{listing.description ? <p className='sqft-value'>{listing.description.sqft}</p> : '0'}
						{listing.property_id ? <p className='listId-value'>{listing.property_id}</p> : ''}
					</div>
				</div>
				<div></div>
				<hr></hr>
				<ContactForm listing={listing} />
			</div>
		</div>
	);
};

export default PropertyDetails;
