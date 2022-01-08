import React, {useState} from 'react';
import './HeaderNav.styles.css';
import {Link} from 'react-router-dom';
import Modal from '../Login/Modal';
import LoginForm from '../Login/LoginForm';

function HeaderNav(props) {
	const [isOpen, setIsOpen] = useState(false);

    return (
			<nav className='HeaderNav__container'>
				<Link className='link' to='/'>
					<h1 className='Header__title'>Empire Homes</h1>
				</Link>
				<ul className='Header__list'>
					<Link className='link' to='/Buy'>
						<li className='Header__list-item'>Buy</li>
					</Link>
					<Link className='link' to='/Rentals'>
						<li className='Header__list-item'>Rent</li>
					</Link>
					<Link className='link' to='/Sell'>
						<li className='Header__list-item'>Sell</li>
					</Link>
					<Link className='link' to='/Feed'>
						<li className='Header__list-item'>Feed</li>
					</Link>
				</ul>
					<button 
					className='Header__login'
					onClick={() => setIsOpen(true)}>
						Log In
					</button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					Log In
					<LoginForm />
				</Modal>
			</nav>
		);
}

export default HeaderNav;