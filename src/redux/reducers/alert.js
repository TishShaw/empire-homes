import { SET_ALERT, REMOVE_ALERT } from '../constants/constants';

const initialState = [];

export const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALERT:
			return [...state, action.payload];

		case REMOVE_ALERT:
			return state.filter((alert) => alert.id !== state.payload);

        default:
            return state;
	}
};
