import React, { useContext } from 'react';
import { PropertyContext } from '../components/Context/PropertyContext';
import PropertyDetailHeader from '../components/PropertyDetails/PropertyDetail-Header';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';

function MainPage(props) {
    const { listings, setListings } = useContext(PropertyContext)
    return (
			<div>
				<PropertyDetailHeader listings={listings} setListings={setListings} />
				<PropertyDetails listings={listings} setListings={setListings} />
			</div>
		);
}

export default MainPage;