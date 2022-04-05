import React, { useRef, useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSliderAlt } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { BiSearchAlt } from 'react-icons/bi';
import { Popover } from 'react-tiny-popover';
import  FeedForm  from '../FeedForm/FeedForm';
import { getListings } from '../../redux/actions/listingActions';
import './Hero.style.css';

function Hero({ Slides }) {
	const [listing, setListing] = useState([]);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.listingsReducer)

	const { listings, loading, success, error } = data;
	
	useEffect(() => {
		dispatch(getListings());
		setListing(listings);
	}, []);

	const navigate = useNavigate();
	const [current, setCurrent] = useState(0);

	const [filterData, setFilterData] = useState([]);
	const length = Slides.length;
	const timeout = useRef(null);

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	useEffect(() => {
		const nextSlide = () => {
			setCurrent((current) => (current === length - 1 ? 0 : current + 1));
		};

		timeout.current = setTimeout(nextSlide, 3000);

		return function () {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, [current, length]);

	const handleFilter = (event) => {
		const target = event.target.value;
		const filterArr = listings.filter((value) => {
			return (
				value.address.toLowerCase().includes(target.toLowerCase())||
				value.city.toLowerCase().includes(target.toLowerCase()) ||
				value.zipcode.toLowerCase().includes(target.toLowerCase()));
		})
		setFilterData(filterArr);
		setListing(filterArr);		
		console.log(filterData)
		console.log(filterArr);
	}; 

		const handleSearchClick = (event) => {
			event.preventDefault();
			setListing(filterData);
			navigate('/Feed');
		};

	return (
		<div className='hero'>
			<div className='hero-wrapper'>
				<div className='hero-wrapper-header'>
					<h1 className='slide-title'>Find Your Next Home.</h1>
					<form action='' className='hero-form' onSubmit={handleSearchClick}>
						<input
							type='text'
							className='hero-input'
							placeholder='Enter City, Address, Zip/Postal Code, Neighborhood, School'
							onChange={handleFilter}
							data={listing}
						/>

						<Popover
							positions={['bottom', 'left']}
							reposition={false}
							isOpen={isPopoverOpen}
							content={
								<div className='popover-content'>
									<FeedForm
										style={{ marginRight: '200px' }}
										listing={filterData}
									/>
								</div>
							}>
							<div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
								{!isPopoverOpen ? (
									<BiSliderAlt className='input-filterBtn' />
								) : (
									<IoMdClose className='input-filterBtn' />
								)}
							</div>
						</Popover>
						<button type='submit' className='hero-inputBtn'>
							SEARCH
						</button>
						<button type='submit' className='hero-searchIcon'>
							<BiSearchAlt className='searchBtnEl'/>
						</button>
					</form>
				</div>
				{Slides.map((slide, index) => {
					return (
						<div className='hero-slide' key={index}>
							{index === current && (
								<div className='hero-slider'>
									<img
										src={slide.image}
										alt={slide.alt}
										className='hero-image'
									/>
									<div className='hero-content'></div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Hero;
