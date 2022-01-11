import React, { useContext } from 'react';
import {PropertyContext} from '../Context/PropertyContext';
import './Header.styles.css';


function Header() {
	const {listings, handleFilter} = useContext(PropertyContext)



    return (
			<div className='Header__container'>
				<div className='input-container'>
					<input
						data={listings}
						className='inputEL input'
						type='search'
						placeholder='Enter an address, city, or Zip code'
						onChange={handleFilter}
					/>
					<button>Search</button>
				</div>
			</div>
		);
	
}

export default Header;