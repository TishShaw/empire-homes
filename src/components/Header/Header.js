import React from 'react';
import './Header.styles.css';

function Header(props) {
    return (
			<div className='Header__container'>
				<div className='input-container'>
					<input 
					type='text' 
					placeholder='Enter an address, city, or Zip code' />
					<button>Search</button>
				</div>
			</div>
		);
}

export default Header;