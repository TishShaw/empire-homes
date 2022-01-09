import React, { useState, useContext } from 'react';
import {PropertyContext} from '../../components/Context/PropertyContext';
function LoginForm({onClose, setIsOpen}) {
	const[loginState, setLoginState] = useState('')
	const [loggedIn, setLoggedIn] = useState(false);
	const {user, setUser} = useContext(PropertyContext)

	const handleChange = (event) => {
		event.preventDefault();

		setLoginState(event.target.value)
		console.log(loginState)
	}

	const handleSubmit= (event) => {
		event.preventDefault();
		setUser({ username: loginState})

		setLoggedIn(true);

		if(loggedIn) {
			setIsOpen(false)
		}
		console.log(user);
		console.log(loggedIn);
	}

	

    return (
			<>
				<main className='pa4 black-80'>
					<form onSubmit={handleSubmit} className='measure center'>
						<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
							<legend className='f4 fw6 ph0 mh0'>Sign In</legend>
							<div className='mt3'>
								<label className='db fw6 lh-copy f6' htmlFor='email-address'>
									Email
								</label>
								<input
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='email'
									name='email-address'
									id='email-address'
									onChange={handleChange}
								/>
							</div>

							<div className='mv3'>
								<label className='db fw6 lh-copy f6' htmlFor='password'>
									Password
								</label>
								<input
									className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='password'
									name='password'
									id='password'
								/>
							</div>
							<label className='pa0 ma0 lh-copy f6 pointer'>
								<input type='checkbox' /> Remember me
							</label>
						</fieldset>
						<div className=''>
							<input
								className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
								type='submit'
								value='Sign in'
							/>
						</div>
						<button
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Sign in'
							onClick={onClose}>
							Cancel
						</button>

						<div className='lh-copy mt3'>
							<a href='#0' className='f6 link dim black db'>
								Sign up
							</a>
							<a href='#0' className='f6 link dim black db'>
								Forgot your password?
							</a>
						</div>
					</form>
				</main>
			</>
		);
}

export default LoginForm;