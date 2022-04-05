import {
	GET_LISTINGS_REQUEST,
	GET_LISTINGS_SUCCESSFUL,
	GET_LISTINGS_FAILED,
	GET_LISTING_DETAILS_REQUEST,
	GET_LISTING_DETAILS_SUCCESSFUL,
	GET_LISTING_DETAILS_FAILED,
	POST_LISTINGS_REQUEST,
	POST_LISTINGS_SUCCESSFUL,
	POST_LISTINGS_FAILED,
} from '../constants/constants';
import axios from 'axios';

export const getListings = () => async (dispatch) => {
	try {
		dispatch({ type: GET_LISTINGS_REQUEST });

		const { data } = await axios.get(
			'https://peaceful-taiga-68965.herokuapp.com/api/listings/'
		);

		dispatch({
			type: GET_LISTINGS_SUCCESSFUL,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_LISTINGS_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_LISTING_DETAILS_REQUEST });

		const { data } = await axios.get(
			`https://peaceful-taiga-68965.herokuapp.com/api/listings/${id}`
		);

		dispatch({
			type: GET_LISTING_DETAILS_SUCCESSFUL,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_LISTING_DETAILS_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const postFormData = (formData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${localStorage.getItem('token')}`,
		},
	};

	dispatch({
		type: POST_LISTINGS_REQUEST,
		payload: [],
	});

	try {
		const data = await axios.post(
			'https://peaceful-taiga-68965.herokuapp.com/api/listings/search',
			config,
			formData
		);

		dispatch({
			type: POST_LISTINGS_SUCCESSFUL,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POST_LISTINGS_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};
