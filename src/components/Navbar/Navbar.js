import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import './Navbar.style.css';
import ContextData from '../../context/Context';

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
	const {user, handleLogout} = useContext(ContextData);
	console.log(user);

	const [isLogin, setIsLogin] = useState(false);

	// Modal state
	const [open, setOpen] = useState(false);

	// Navbar state
	const [showing, setShowing] = useState(false);
	const [close, setClose] = useState(false);

	const handleShowing = () => {
		setShowing(!showing);
		setClose(!close);
	};

	const handleOpen = () => setOpen(true);

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

			{showing ? (
				<div className='mobileLinks active'>
					<ul className='mobile-navbar-list' onClick={handleShowing}>
						<li className='mobile-navbar-item'>
							<Link to='/'>Home</Link>
						</li>
						<li className='mobile-navbar-item'>
							<Link to='/feed'>Search</Link>
						</li>
						{user ? (
							<li className='mobile-navbar-item'>
								<Link to='/feed'>Account</Link>
							</li>
						) : (
							''
						)}
					</ul>
					<button className='mobile-authBtn' onClick={handleShowing}>
						{!user ? (
							<>
								<Link to='/login'>Sign In </Link> |
								<Link to='/signup'>Sign Up</Link>
							</>
						) : (
							<div onClick={handleLogout}>Logout</div>
						)}
					</button>
				</div>
			) : null}

			<h1 className='navbar-title'>
				<Link to='/'>Empire Homes</Link>
			</h1>
			<div>
				<div onClick={handleOpen}>
					<ul className='navbar-auth-sec'>
						{!user ? (
							<>
								<li>
									<div onClick={() => setIsLogin(true)}>
										<Link to='/login'> Sign In</Link>
									</div>
								</li>{' '}
								|{' '}
								<li>
									<div onClick={() => setIsLogin(false)}>
										<Link to='/signup'>Sign Up</Link>
									</div>
								</li>
							</>
						) : (
							<div onClick={handleLogout}>Logout</div>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
