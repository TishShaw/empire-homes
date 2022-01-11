import Button from '@mui/material/Button';
import './PropertyDetails-Header.styles.css';
function PropertyDetailHeader({listing}) {



    return (
			<div className='prop-wrapper'>
				<div className='details-container' key={listing.listing_id}>
					{listing.location ? <h1 className='prop-title'>{listing.location.address.line}</h1> : ''}
					<p className='price-prop'>${listing.list_price}</p>
					<p className='prop-breadcrumb'>
						{listing.description ? listing.description.beds : '0'}
						<span> Beds </span>
						{listing.description ? listing.description.baths_full : '0'}
						<span> Baths </span>/ {listing.description ? listing.description.sqft: '0'}
						<span> sq Ft </span>
					</p>
				</div>

				<div className='buttonEl'>
					<Button className='btn-header' variant='outlined' size='small'>
						Save
					</Button>
					<Button className='btn-header' variant='outlined' size='small'>
						Share
					</Button>
				</div>
			</div>
		);
}

export default PropertyDetailHeader;