import React, { useState, useContext } from 'react';
import { PropertyContext } from '../Context/PropertyContext';
import { Link } from 'react-router-dom';
import Modal from '../Login/Modal';
import LoginForm from '../Login/LoginForm'; 
import Button from '@material-ui/core/Button';
import './HeaderNav.styles.css';



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
						<Button Button
							className='f6 fw6 ttu logout-btn'
							variant='outlined'
							color='secondary'
							onClick={handleLoggingOut}>
							Log Out
						</Button>
					) : (
						<Button
							className='f6 fw6 ttu '
							variant='outlined'
							color='secondary'
							onClick={() => setIsOpen(true)}>
							Log In
						</Button>
					)}
					<Modal
						open={isOpen}
						onSubmit={() => setIsOpen(false)}
						onClose={() => setIsOpen(false)}>
						<LoginForm setIsOpen={setIsOpen} />
					</Modal>
					{user.username ? <p className='p-text'></p> : null}
				</div>
			</nav>
		);
}

export default HeaderNav;