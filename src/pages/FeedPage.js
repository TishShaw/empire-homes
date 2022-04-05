import React, { useState, useEffect } from 'react';
import FeedForm from '../components/FeedForm/FeedForm';
import PropertyListings from '../components/Listings/PropertyListings';
import Pagination from '../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { getListings } from '../redux/actions/listingActions';
import Card from '../components/Card/Card';
import './FeedPage.styles.css';

// home
function FeedPage(props) {
	// Redux - GET listings
	const dispatch = useDispatch();
	const data = useSelector((state) => state.listingsReducer);
	const { listings, loading, success, error } = data;
	
	// Pagination
	const [page, setPage] = useState(0);
	const [listing, setListing] = useState(listings);
	console.log(listing);

	const listingsPerPage = 1;
	const numberOflistingsVistited = page * listingsPerPage;

	const displayListings = listing.slice(numberOflistingsVistited, numberOflistingsVistited + listingsPerPage).map((listing) => {
			return (
				<div className='feed__results'>
					{/* {listing.title} */}
					<Card
						key={listing.id}
						id={listing.id}
						title={listing.title}
						address={listing.address}
						city={listing.city}
						state={listing.state}
						zipcode={listing.zipcode}
						price={listing.price}
						home_type={listing.home_type}
						beds={listing.bedrooms}
						bath={listing.bathrooms}
						sqft={listing.sqft}
						image={listing.listing_photo}
						slug={listing.slug}
					/>
				</div>
			);
		});

	return (
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
								listings={listings}
								page={page}
								setPage={setPage}
								listingsPerPage={listingsPerPage}
							/>
						) : null}
					</div>
				</section>
			</div>
		</div>
	);
}

export default FeedPage;
