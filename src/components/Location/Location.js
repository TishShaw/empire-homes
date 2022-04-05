import React from 'react';
import './Location.style.css';

function Location(props) {
    return (
			<div className='location'>
				<div className='location-wrapper'>
					<h1 className='location-title'>
						Explore Our Communities and Neighborhoods
					</h1>
					<div className='location-cities'>
						<ul className='location-col-1'>
							<li>Bowie</li>
							<li>Burtonsville</li>
							<li>Clarksville</li>
							<li>College Park</li>
							<li>Columbia</li>
							<li>Crofton</li>
						</ul>
						<ul className='location-col-2'>
							<li>Elkridge</li>
							<li>Ellicott City</li>
							<li>Fulton</li>
							<li>Gaitherburg</li>
							<li>Glen Burnie</li>
							<li>Glenn Dale</li>
						</ul>
						<ul className='location-col-3'>
							<li>Greenbelt</li>
							<li>Mount Rainier</li>
							<li>Odenton</li>
							<li>Potomac</li>
							<li>Rockville</li>
							<li>Glenn Dale</li>
						</ul>
					</div>
				</div>
			</div>
		);
}

export default Location;