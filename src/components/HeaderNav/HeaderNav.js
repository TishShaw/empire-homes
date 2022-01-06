import React from 'react';
import './HeaderNav.styles.css';
import {Link} from 'react-router-dom';

function HeaderNav(props) {
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
				<Link className='link' to='/Login'>
					<h3 className='Header__login'>Login</h3>
				</Link>
			</nav>
		);
}

export default HeaderNav;