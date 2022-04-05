import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import './Navbar.style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';

const style = {
	position: 'absolute',
	top: '47%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	height: '800px',
	margin: 'auto',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};

function Navbar(props) {
	const [isLogin, setIsLogin] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);

	const handleLogin = () => {
		setIsLogin(true);
		console.log('login');
	};

	const handleSignUp = () => {
		setIsSignUp(true);
		console.log('signup');
	};

	const [open, setOpen] = React.useState(false);
	const [showing, setShowing] = useState(false);
	const [close, setClose] = useState(false);

	const handleShowing = () => {
		setShowing(!showing);
		setClose(!close);
	};

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className='navbar-container'>
			<div className='fullLinks'>
				<ul className='navbar-list'>
					<li className='navbar-item'>
						<Link to='/'>Home</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/feed'>Search</Link>
					</li>
				</ul>
			</div>

			<button onClick={handleShowing} className='mobile-menu-btn'>
				{!close ? (
					<FaBars className='faBars' />
				) : (
					<FaTimes className='faBars' />
				)}
			</button>

			<div className='nav-mobile'>
				{showing ? (
					<div className='mobileLinks'>
						<ul className='mobile-navbar-list' onClick={handleShowing}>
							<li className='mobile-navbar-item'>
								<Link to='/'>Home</Link>
							</li>
							<li className='mobile-navbar-item'>
								<Link to='/feed'>Search</Link>
							</li>
						</ul>
					</div>
				) : null}
			</div>

			<h1 className='navbar-title'>
				<Link to='/'>Empire Homes</Link>
			</h1>
			<div>
				<div onClick={handleOpen}>
					<ul className='navbar-auth-sec'>
						<li>
							<div onClick={() => setIsLogin(true)}>Sign In</div>
						</li>{' '}
						|{' '}
						<li>
							<div onClick={() => setIsLogin(false)}>Sign Up</div>
						</li>
					</ul>
				</div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'>
					<Box sx={style}>
						{isLogin ? (
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									flexDirection: 'column',
									alignItems: 'center',
									height: 120,
								}}>
								<div className='modalDiv'></div>
								<Typography
									id='modal-modal-description'
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										marginTop: '-300px',
									}}>
									<LoginForm />
								</Typography>

								<Typography
									id='modal-modal-description'
									style={{
										backgroundColor: 'rgb(179, 173,173)',
										height: '150px',
										color: ' white',
										fontSize: '20px',
										bottom: 0,
										width: 600,
										display: 'flex',
										justifyContent: 'center',
										flexDirection: 'column',
										alignItems: 'center',
										padding: 40,
										marginBottom: '-350px',
									}}>
									Not a Member ? CREATE AN ACCOUNT
								</Typography>
							</div>
						) : (
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									flexDirection: 'column',
									alignItems: 'center',
									height: 120,
								}}>
								<div className='modalDiv'></div>
								<Typography
									id='modal-modal-description'
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										marginTop: '-300px',
									}}>
									<SignUpForm />
								</Typography>

								<Typography
									id='modal-modal-description'
									style={{
										backgroundColor: 'rgb(179, 173,173)',
										height: '150px',
										color: ' white',
										fontSize: '20px',
										bottom: 0,
										width: 600,
										display: 'flex',
										justifyContent: 'center',
										flexDirection: 'column',
										alignItems: 'center',
										padding: 40,
										marginBottom: '-350px',
									}}>
									Already a Member ? Sign In
								</Typography>
							</div>
						)}
					</Box>
				</Modal>
			</div>
		</div>
	);
}

export default Navbar;
