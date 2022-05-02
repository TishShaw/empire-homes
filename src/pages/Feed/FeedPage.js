import React, { useState, useContext } from 'react';
import FeedForm from '../../components/FeedForm/FeedForm';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';
import ContextData from '../../context/Context';
import './FeedPage.styles.css';

// home
function FeedPage() {
	const { listing, setListing } = useContext(ContextData);

	// Pagination
	const [page, setPage] = useState(0);
	const listingsPerPage = 8;
	const numberOflistingsVistited = page * listingsPerPage;

	const displayListings = listing.slice(numberOflistingsVistited, numberOflistingsVistited + listingsPerPage).map((listing) => {
			return (
				<div className='feed__results'>
					{/* {listing.title} */}
					<Card
						key={listing.property_id}
						id={listing.property_id}
						title={listing.description.sub_type}
						address={listing.location.address.line}
						city={listing.location.address.city}
						state={listing.location.address.state_code}
						zipcode={listing.location.address.postal_code}
						price={listing.list_price}
						home_type={listing.description.sub_type}
						beds={listing.description.beds}
						bath={listing.description.baths}
						sqft={listing.description.sqft}
						image={listing.primary_photo.href}
						
					/>
				</div>
			);
		});

	return (
		<>
		<div className='feed-container'>
			<div className='feed-content'>
				<h1 className='feedPage-title'>Advanced Search</h1>
				<section className='feed__form'>
					<FeedForm setListing={setListing} listing={listing} />
				</section>

				<section className='feed__results-container'>
			
					<h1 className='feed__results-container-title'>Featured Listings</h1>

					<div className='feed__results'>{displayListings}</div>
				</section>
				<section className='feed__results-paginator'>
					<div>
						{listing.length !== 0 ? (
							<Pagination
								listings={listing}
								page={page}
								setPage={setPage}
								listingsPerPage={listingsPerPage}
							/>
						) : null}
					</div>
				</section>
			</div>
		</div>
		</>
	);
}

export default FeedPage;
