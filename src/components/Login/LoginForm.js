import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import ContextData from '../../context/Context';
import { signInWithGoogle } from '../../Firebase';
import { auth } from '../../Firebase';
import './Login.styles.css';

function LoginForm() {
	const { handleLogin, loggedIn } = useContext(ContextData);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	if (loggedIn) {
		return <Navigate to='/' />
	}
		return (
			<div className='loginform-container'>
				<div className='loginform'>
					<div className='leftside-form'>
						<div className='upperLeft'>
							<h1 className='upperLeft__title'>Login to Your Account</h1>
						</div>
						<div className='lowerLeft'>
							<form
								className='left-form'
								onSubmit={(e) => {
									e.preventDefault();
									handleLogin(auth, email, password);
								}}>
								<input
									type='email'
									placeholder='Email'
									onChange={(e) => setEmail(e.target.value)}
									className='inputEl'
									required
								/>
								<input
									type='password'
									placeholder='Password'
									onChange={(e) => setPassword(e.target.value)}
									className='inputEl'
									minLength='6'
									required
								/>
								<div className='button-controls'>
									<button type='submit' className='signInBtn'>
										Sign In
									</button>
									<button className='cancelBtn'>Cancel</button>
								</div>
								<div className='googleBtn-container'>
									<p>OR</p>
									<button className='googleBtn' onClick={signInWithGoogle}>
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

export default LoginForm;
