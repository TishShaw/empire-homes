import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../../redux/actions/authActions';
import './Login.styles.css';
import SignupForm from './SignUpForm';
import axios from 'axios';

function LoginForm({ setAlert, login, isAuthenticated }) {
	const [formState, setFormState] = useState({
		email: '',
		password: '',
	});

	const [signupForm, setSignUpForm] = useState(false);

	const handleSignUp = (e) => {
		e.preventDefault();
		setSignUpForm(true);
	};

	const handleCloseSignUp = (e) => {
		e.preventDefault();
		setSignUpForm(false);
	};

	// const userLogin = useSelector((state) => state.userLogin);
	// const { userData, success } = userLogin;
	// console.log(userData);
	// console.log(userLogin);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.authReducer);
	console.log(user);
	const { email, password } = formState;
	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formState));
	};
	
	// const loginWithGoogle = async () => {
	// 	try {
	// 		const res = await axios.get(
	// 			`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/home`
	// 		);
	// 		window.location.replace(res.data.authorization_url);
	// 	} catch (err) {
	// 		console.log('Error logging in');
	// 	}
	// };

	if (isAuthenticated) {
		return <Navigate to='/' />;
	}
	return (
		<div className='loginform-container'>
			<div className='loginform'>
				<div className='leftside-form'>
					<div className='upperLeft'>
						<h1 className='upperLeft__title'>Login to Your Account</h1>
						<div className='socials'></div>
					</div>
					<div className='lowerLeft'>
						<form className='left-form' onSubmit={(e) => handleSubmit(e)}>
							<input
								type='email'
								placeholder='Email'
								onChange={(e) => handleChange(e)}
								value={email}
								name='email'
								className='inputEl'
								required
							/>
							<input
								type='password'
								placeholder='Password'
								onChange={handleChange}
								value={password}
								name='password'
								className='inputEl'
								minLength='6'
								required
							/>
							<div className='button-controls'>
								<button onClick={handleSubmit} className='signInBtn'>
									Sign In
								</button>
								<button onClick={handleSubmit} className='cancelBtn'>
									Cancel
								</button>
							</div>
							<div className='googleBtn-container'>
								<p>OR</p>
								<button className='googleBtn'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
										alt='sign in with google'
										width='40px'
										height='40px'
										style={{ marginRight: '10px' }}
									/>
									Continue With Google{' '}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

login.propTypes = {
	login: PropTypes.func.isRequired,
	isAutheticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
