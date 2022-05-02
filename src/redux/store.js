import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {alertReducer } from './reducers/alert';
import { authReducer} from './reducers/auth';
import {
	listingsReducer,
	listingDetailsReducer, listingsFormReducer,
} from './reducers/listings';

const middleWare = [thunk];

const retrieveUserFromStorage = localStorage.getItem('userData')
	? JSON.parse(localStorage.getItem('userData'))
	: [];

const initialState = {
	userLogin: retrieveUserFromStorage,
};

const reducers = combineReducers({
	alertReducer,
	userLogin: authReducer,
	listingsReducer,
	listingDetailsReducer,
	listingsFormReducer,
});

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
