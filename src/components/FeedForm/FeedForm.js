import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import './FeedForm.styles.css';

function FeedForm({ listing }) {
	// console.log(listing)
	const [formData, setFormData] = useState({
		sale_type: "For Sale",
		price: 'Any',
		home_type: 'House',
		bathrooms: '1+',
		bedrooms: '1+',
		sqft: 'Any',
		open_house: 'false',
		keywords: '',
	});

	const {
		sale_type,
		price,
		bedrooms,
		bathrooms,
		sqft,
		open_house,
		keywords,
	} = formData;

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('https://peaceful-taiga-68965.herokuapp.com/api/listings/search', {
				sale_type,
				price,
				bedrooms,
				bathrooms,
				sqft,
				open_house,
				keywords,
			})
			.then((res) => {
				setLoading(false);
				// setListing(res.data);
				window.scrollTo(0, 0);
			})
			.catch((err) => {
				setLoading(false);
				window.scroll(0, 0);
			});
	};

	return (
		<form className='feedForm' onSubmit={(e) => handleSubmit(e)}>
			<div className='row'>
				<div className='col-1-of-6'>
					<div className='listingForm__section'>
						<label className='listingForm__label' htmlFor='sale_type'>
							Sale or Rent
						</label>
						<select
							className='listingForm__select'
							name='sale_type'
							onChange={(e) => handleChange(e)}
							value={sale_type}>
							<option>For Sale</option>
							<option>For rent</option>
						</select>
					</div>
				</div>			
			</div>

			<div className='col-1-of-6'>
				<div className='listingForm__section'>
					<label className='listingForm__label' htmlFor='price'>
						Minimum Price
					</label>
					<select
						className='listingForm__select'
						name='price'
						onChange={(e) => handleChange(e)}
						value={price}>
						
						<option>$200,000+</option>
						<option>$400,000+</option>
						<option>$600,000+</option>
						<option>$800,000+</option>
						<option>$1,000,000+</option>
						<option>$1,200,000+</option>
						<option>$1,500,000+</option>
						<option>Any</option>
					</select>
				</div>
				<div className='listingForm__section'>
					<label className='listingForm__label' htmlFor='sqft'>
						Sqft
					</label>
					<select
						className='listingForm__select'
						name='sqft'
						onChange={(e) => handleChange(e)}
						value={sqft}>
						<option>1000+</option>
						<option>1200+</option>
						<option>1400+</option>
						<option>1500+</option>
						<option>2000+</option>
						<option>Any</option>
					</select>
				</div>
			</div>
			<div className='col-1-of-6'>
				<div className='listingForm__section'>
					<label className='listingForm__label' htmlFor='bedrooms'>
						Beds
					</label>
					<select
						className='listingForm__select'
						name='bedrooms'
						onChange={(e) => handleChange(e)}
						value={bedrooms}>
						<option>1+</option>
						<option>2+</option>
						<option>3+</option>
						<option>4+</option>
						<option>5+</option>
					</select>
				</div>
				<div className='listingForm__section'>
					<label className='listingForm__label' htmlFor='bathrooms'>
						Baths
					</label>
					<select
						className='listingForm__select'
						name='bathrooms'
						onChange={(e) => handleChange(e)}
						value={bathrooms}>						
						<option>1+</option>
						<option>2+</option>
						<option>3+</option>
						<option>4+</option>
					</select>
				</div>
			</div>
			<div className='col-1-of-6'>
				<div className='listingForm__section'>
					<label htmlFor='keywords' className='listingForm__label'>
						Keywords
					</label>
					<input
						type='text'
						onChange={(e) => handleChange(e)}
						value={keywords}
						name='keywords'
					/>
				</div>
			</div>
			<div className='col-1-of-6'>
				<div className='listingForm__section'>
					<label className='listingForm__label' htmlFor='open_house'>
						Open House
					</label>
					<input
						type='checkbox'
						onChange={(e) => handleChange(e)}
						value={open_house}
						name='open_house'
					/>
				</div>
			</div>
			<button className='listingForm__btn'>Submit</button>
		</form>
	);
}

FeedForm.propTypes = {
	setListing: PropTypes.func.isRequired,
};

export default FeedForm;
