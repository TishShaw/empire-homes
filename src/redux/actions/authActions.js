import {
	USER_LOGIN_SUCCESSFUL,
	USER_SIGNUP_SUCCESSFUL,
	USER_LOGIN_FAILED,
	USER_SIGNUP_FAILED,
	SIGNOUT,
	GOOGLE_AUTH_FAIL,
	GOOGLE_AUTH_SUCCESS,

} from '../constants/constants';

import axios from 'axios';
axios.defaults.withCredentials = true;

export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	};

	const body = JSON.stringify({ email, password });

	try {
		const {data} = await axios.post(
			'http://localhost:8000/accounts/token/login',
			body,
			config
		);

		dispatch({
			type: USER_LOGIN_SUCCESSFUL,
			payload: data,
		});
	
		localStorage.setItem('userData', JSON.stringify(data));

		
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAILED,
		});

	
	}
};


// export const googleAuthenticate = (state, code) => async (dispatch) => {
// 	if (state && code && !localStorage.getItem('access')) {
// 		const config = {
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 		};
// 		const details = {
// 			state: state,
// 			code: code,
// 		};
// 		const formBody = Object.keys(details)
// 			.map(
// 				(key) =>
// 					encodeURIComponent(key) + '=' + encodeURIComponent(details[key])
// 			)
// 			.join('&');
// 		try {
// 			const res = await axios.post(
// 				`http://localhost:8000/accounts/auth/google/${formBody}`,
// 				config
// 			);
// 			console.log(res.data);
// 			dispatch({
// 				type: GOOGLE_AUTH_SUCCESS,
// 				payload: res.data,
// 			});
// 		} catch (err) {
// 			dispatch({
// 				type: GOOGLE_AUTH_FAIL,
// 			});
// 			console.log(err);
// 		}
// 	}
// };

export const signup =({ name, email, password, password2 }) => async (dispatch) => {
	
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({ name, email, password, password2 });

		

		try {
			const response = await axios.post('http://localhost:8000/users/',
				body,
				config
			);

			dispatch({
				type: USER_SIGNUP_SUCCESSFUL,
				payload: response.data,
			});
			console.log(response.data)

			dispatch(login(email, password));
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
