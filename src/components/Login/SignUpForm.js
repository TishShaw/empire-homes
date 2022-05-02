import { useState, useContext } from 'react';
import {Navigate} from 'react-router-dom';
import ContextData from '../../context/Context';
import { auth } from '../../Firebase';
import './Login.styles.css';

function SignupForm() {
	const { handleSignUp, user } = useContext(ContextData);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	if (user) {
		return <Navigate to='/' />;
	}
	return (
		<div className='rightside-form'>
			<div className='signup-container'>
				<div className='right-form'>
					<h1 className='upperRight-title'>Create An Account</h1>
				</div>
				<form
					className='left-form'
					onSubmit={(e) => {
						e.preventDefault();
						handleSignUp(auth, email, password);
					}}>
					{/* <input
						type='name'
						placeholder='Full Name'
						onChange={(e) => setName(e.target.value)}
						className='name-inputEl'
					
					/> */}
					<input
						type='email'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
						className='email-inputEl'
					/>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
						className='password-inputEl'
					/>
					<div className='button-controls'>
						<button className='signInBtn' type='submit'>
							Sign Up
						</button>
						<button className='cancelBtn'>Cancel</button>
					</div>
				</form>
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
			</div>
		</div>
	);
}

export default SignupForm;
