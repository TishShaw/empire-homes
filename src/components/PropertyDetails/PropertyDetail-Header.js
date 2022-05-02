import './PropertyDetails-Header.styles.css';
function PropertyDetailHeader({listing}) {

	if (!listing) {
		return null;
	}
    return (
			<div className='prop-wrapper'>
				<div className='details-container' key={listing.property_id}>
					<h1 className='prop-title'>{listing.location ? listing.location.address.line : ''}</h1>
					<p className='price-prop'>${listing.list_price}</p>
					<p className='prop-breadcrumb'>
						 {listing.description ? listing.description.beds : ''}
						<span> Beds / </span>
						{listing.description ? listing.description.baths : ''}
						<span> Baths </span>/ {listing.description ? listing.description.sqft: ''}
						<span> sq Ft </span>
					</p>
				</div>
			</div>
		);
}

export default PropertyDetailHeader;