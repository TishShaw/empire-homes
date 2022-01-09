import React from 'react';
import Button from '@mui/material/Button';
import './PropertyDetails-Header.styles.css';


function PropertyDetailHeader(props) {
    return (
			<div className='prop-wrapper'>
				<div className='details-container'>
					<h1 className='prop-title'>9563 Transer Row, Columbia, MD 21045</h1>
					<p className='price-prop'>$235,680</p>
					<p>
						3 <span>Beds</span>/
						1.5<span>Baths</span>/
						1,248<span>sq Ft</span>
					</p>
				</div>
				<div className='buttonEl'>
					<Button className='btn-header' variant='outlined' size='small'>
						Save
					</Button>
				</div>
			</div>
		);
}

export default PropertyDetailHeader;