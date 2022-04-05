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
} from '../constants/constants.js';

export const listingsReducer = (state = { listings: [] }, action) => {
	switch (action.type) {
		case GET_LISTINGS_REQUEST:
			return { listings: [], loading: true };
		case GET_LISTINGS_SUCCESSFUL:
			return {
				listings: action.payload,
				loading: false,
				error: false,
				success: true,
			};

		case GET_LISTINGS_FAILED:
			return {
				...state,
				error: action.payload,
				loading: true,
				success: false,
			};

		default:
			return state;
	}
};

export const listingDetailsReducer = (
	state = {listing: {}},
	action
) => {
	switch (action.type) {
		case GET_LISTING_DETAILS_REQUEST:
			return { loading: true, ...state };
		case GET_LISTING_DETAILS_SUCCESSFUL:
			return { loading: false, listing: action.payload };

		case GET_LISTING_DETAILS_FAILED:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const listingsFormReducer = (state = { listings: [] }, action) => {
	switch (action.type) {
			case POST_LISTINGS_REQUEST:
			return { listings: [], loaind: true };
			
			case POST_LISTINGS_SUCCESSFUL:
			return {
				listings: action.payload,
				loading: false,
				error: false,
				success: true,
			};

			case POST_LISTINGS_FAILED:
			return {
				...state,
				error: action.payload,
				loading: true,
				success: false,
			};

		default:
			return state;
	}
};
