import React, { useContext } from 'react';
import { PropertyContext } from '../components/Context/PropertyContext';
import PropertyDetailHeader from '../components/PropertyDetails/PropertyDetail-Header';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';

function MainPage(props) {
    return (
			<div>
				<PropertyDetailHeader />
				<PropertyDetails  />
			</div>
		);
}

export default MainPage;