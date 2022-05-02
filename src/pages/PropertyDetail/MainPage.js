import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux';
import {getProductDetails} from '../../redux/actions/listingActions';
import PropertyDetailHeader from '../../components/PropertyDetails/PropertyDetail-Header';
import PropertyDetails from '../../components/PropertyDetails/PropertyDetails';


function MainPage() {
	const { id } = useParams();
	const dispatch = useDispatch()
	const data = useSelector((state) => state.listingDetailsReducer)
	const {listing} = data;

	useEffect(() => {
		dispatch(getProductDetails(id))
	}, [])

    return (
			<div>
				<PropertyDetailHeader listing={listing} />
				<PropertyDetails listing={listing} />
			</div>
		);
}

export default MainPage;