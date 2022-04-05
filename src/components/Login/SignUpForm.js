import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { signup } from '../../redux/actions/authActions';

import './Login.styles.css';

function SignupForm({  signup, isAuthenticated }) {
	const [registrationFormState, setRegistrationFormState] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = useState(registrationFormState);

	const [signupForm, setSignUpForm] = useState(false);

	const handleChange = (e) => {
		e.preventDefault();

		setRegistrationFormState({
			...registrationFormState,
			[e.target.name]: e.target.value,
		});
	};



	const handleSubmitSignup = (e) => {
		e.preventDefault();
		
		if (password !== password2) {
			return ('Passwords do not match');
		} else {
			signup({ name, email, password, password2 });
		}
	};

	if (isAuthenticated) {
		return <Navigate to='/' />;
	}
	return (
		<>
			<div className='rightside-form'>
				<div className='right-form'>
					<h1 className='upperRight-title'>Create An Account</h1>
				</div>
				<form className='left-form' onSubmit={(e) => handleSubmitSignup(e)}>
					<input
						type='name'
						placeholder='Full Name'
						onChange={(e) => handleChange(e)}
						className='name-inputEl'
						value={name}
						name='name'
					/>
					<input
						type='email'
						placeholder='Email'
						onChange={(e) => handleChange(e)}
						className='email-inputEl'
						value={email}
						name='email'
					/>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => handleChange(e)}
						className='password-inputEl'
						value={password}
						name='password'
					/>
					<input
						type='password'
						placeholder='Confirm Password'
						onChange={(e) => handleChange(e)}
						className='password-inputEl'
						value={password2}
						name='password2'
					/>
					<button type='submit' className='signInBtn'>
						Submit
					</button>
				</form>
				<div>
					<p>OR</p>
					<button className='googleBtn'>
						<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' />
						Continue With Google{' '}
					</button>
				</div>
			</div>
		</>
	);
}

signup.propTypes = {
	signup: PropTypes.func.isRequired,
	isAutheticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, {signup})(SignupForm);
