import {
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESSFUL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESSFUL,
	USER_LOGIN_FAILED,
	USER_SIGNUP_FAILED,
	SIGNOUT,
} from '../constants/constants';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../Firebase';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const data = await signInWithEmailAndPassword(auth, email, password);
		console.log(data);

		dispatch({
			type: USER_LOGIN_SUCCESSFUL,
			payload: data
		});

		localStorage.setItem(
			'userData',
			JSON.stringify(data.user.auth.currentUser)
		);
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});

		console.log(error);
	}
};

export const registerUser = ({ email, password }) => async (dispatch) => {
		try {
			const data = await createUserWithEmailAndPassword(auth, email, password);
			const user = {
				token: data.user.uid,
				user: data.user,
			};
			console.log(user);

			localStorage.setItem('userData', JSON.stringify(user));

			dispatch({
				type: USER_SIGNUP_SUCCESSFUL,
				payload: data.user,
			});
			console.log(data.data);
		} catch (error) {
			dispatch({
				type: USER_SIGNUP_FAILED,
			});
		}
	};

export const logout = () => (dispatch) => {
	localStorage.removeItem('userData');
	dispatch({ type: SIGNOUT });
};
