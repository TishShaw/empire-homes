import './PropertyDetails-Header.styles.css';
function PropertyDetailHeader({listing}) {
if(!listing){
	return null
}
    return (
			<div className='prop-wrapper'>
				<div className='details-container' key={listing.id}>
					<h1 className='prop-title'>{listing.address}</h1>
					<p className='price-prop'>${listing.price}</p>
					<p className='prop-breadcrumb'>
						 {listing.bedrooms}
						<span> Beds / </span>
						{listing.bathrooms}
						<span> Baths </span>/ {listing.sqft}
						<span> sq Ft </span>
					</p>
				</div>
			</div>
		);
}

export default PropertyDetailHeader;