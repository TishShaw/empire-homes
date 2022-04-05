import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Header.styles.css';

function Header() {
	const navigate = useNavigate();

	const handleHomeSearch = () => {
		navigate('/Feed')
	}

    return (
			<div className='Header__container'>
				
				<div className='input-container'>
					<h2 className='Header__container-title'>Find The Perfect Home</h2>
					<form action='' className='formEl'>
						<div>
							<input
								// data={listings}
								className='inputEL input'
								type='text'
								placeholder='Search address, city, or Zipcode'
								// value={listings}
								// onChange={handleFilter}
							/>
						</div>
						<div>
							<button className='btn searchBtn' onClick={handleHomeSearch}>
								<SearchIcon className='search-icon' />
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	
}

export default Header;