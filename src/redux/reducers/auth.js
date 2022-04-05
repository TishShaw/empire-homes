import {
    USER_SIGNUP_SUCCESSFUL,
    USER_SIGNUP_FAILED,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESSFUL,

    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,

    SIGNOUT
} from '../constants/constants.js';

const initialState = {
    token: localStorage.getItem('token'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    loading: false,
    userData:{}
}

// const initialState = {
// 	access: localStorage.getItem('access'),
// 	refresh: localStorage.getItem('refresh'),
// 	isAuthenticated: false,
// };

export const authReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESSFUL:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: action.payload.access,
                userData: action.payload
            }

        case USER_SIGNUP_SUCCESSFUL:
            return {
                ...state,
                isAuthenticated: false,
                loading: true,
                userData: action.payload
            }

        case USER_LOGIN_FAILED:
        case USER_SIGNUP_FAILED:
        case SIGNOUT:
           
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default:
            return state;
    }
}

export const googleAuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOOGLE_AUTH_SUCCESS:
			console.log(action.payload);
			localStorage.setItem('access', action.payload.access);
			return {
				...state,
				isAuthenticated: true,
				access: action.payload.access,
				refresh: action.payload.refresh,
			};
		case GOOGLE_AUTH_FAIL:
		case SIGNOUT:
			console.log(action.payload);
			localStorage.removeItem('access');
			localStorage.removeItem('refresh');
			return {
				...state,
				isAuthenticated: false,
				access: null,
				refresh: null,
			};
		default:
			return state;
	}
}
