import React from 'react';
import PropertyDetailHeader from '../components/PropertyDetails/PropertyDetail-Header';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
function MainPage(props) {
    return (
        <div>
            <PropertyDetailHeader/>
            <PropertyDetails />
        </div>
    );
}

export default MainPage;