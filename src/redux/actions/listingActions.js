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
import {useParams} from 'react-router-dom';
import { DataArrayOutlined } from '@mui/icons-material';

export const getListings = () => async (dispatch) => {
		const config = {
			headers: {
				'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
				'X-RapidAPI-Key': '9dcf9e95fcmsh339e0af3321695ap1b750cjsn1309b34ae1f5',
			},
			params: {
				offset: '0',
				limit: '42',
				state_code: 'MD',
				city: 'Columbia',
				sort: 'newest',
				property_type: '4435546487',
			},
		};

	try {
		dispatch({ type: GET_LISTINGS_REQUEST });

		const { data } = await axios.get(
			'http://127.0.0.1:5500/listings.json',
			config
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

	const options = {
		method: 'GET',
		// url: `http://127.0.0.1:5500/listings.json/${id}`,
		url: 'https://us-real-estate.p.rapidapi.com/property-detail',
		params: { property_id: id },
		headers: {
			'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
			'X-RapidAPI-Key': '9dcf9e95fcmsh339e0af3321695ap1b750cjsn1309b34ae1f5',
		},
	};
	try {
		dispatch({ type: GET_LISTING_DETAILS_REQUEST });

		const { data } = await axios
			.request(options)

		dispatch({
			type: GET_LISTING_DETAILS_SUCCESSFUL,
			payload: data.data,
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
			'Access-Control-Allow-Credentials':
				'accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with',
			'Access-Control-Allow-Methods': ' DELETE, GET, OPTIONS, PATCH, POST, PUT',
			'Access-Control-Allow-Origin': 'http://localhost:3000/',
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
