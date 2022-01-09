import React, { useState, useContext } from 'react';
import { PropertyContext } from '../Context/PropertyContext';
import './HeaderNav.styles.css';
import {Link} from 'react-router-dom';
import Modal from '../Login/Modal';
import LoginForm from '../Login/LoginForm';


function HeaderNav() {
	const [isOpen, setIsOpen] = useState(false);
	const {user, setUser} = useContext(PropertyContext)

	const handleLoggingOut = (event) => {
		event.preventDefault();
		setUser({ username: '' });

	}

    return (
			<nav className='HeaderNav__container'>
				<Link className='link' to='/'>
					<h1 className='Header__title'>Empire Homes</h1>
				</Link>
				
				<div className='lastItem'>
					{user.username ? (
						<button className='logout-btn' onClick={handleLoggingOut}>
							Log out
						</button>
					) : (
						<button className='f6 fw6 ttu ' onClick={() => setIsOpen(true)}>
							Log In
						</button>
					)}
					<Modal
						open={isOpen}
						onSubmit={() => setIsOpen(false)}
						onClose={() => setIsOpen(false)}>
						<LoginForm setIsOpen={setIsOpen} />
					</Modal>
					{user.username ? <p className='p-text'>`Welcome Home` </p> : null}
				</div>
			</nav>
		);
}

export default HeaderNav;