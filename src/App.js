import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PropertyContext } from './components/Context/PropertyContext';
import Homepage from './pages/Homepage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';
import FeedPage from './pages/FeedPage';
import ContactPage from './components/ContactPage/ContactPage';
import ServicePage from './components/ServicesPage/ServicePage';
import About from './components/About/About';

function App() {
	const [listing, setListing] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	

	const [user, setUser] = useState({
		username: '',
		loggedin: false,
	});	

		useEffect(() => {
			fetch('http://127.0.0.1:5500/src/listings.json', {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY,
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setListing(res);
				})
				.catch((err) => {
					console.error(err);
				});
		}, []);

const handleFilter = (event) => {
	const target = event.target.value;
	const filterArr = listing.filter((value) => {
		return (
			value.location.address.postal_code
				.toLowerCase()
				.includes(target.toLowerCase()) ||
			value.location.address.city
				.toLowerCase()
				.includes(target.toLowerCase()) ||
			value.location.address.line
				.toLowerCase()
				.includes(target.toLowerCase())
		);
	})
	setFilteredData(filterArr)
	console.log(filterArr);
};

	return (
		<div>
			<PropertyContext.Provider
				value={{
					user,
					setUser,
					handleFilter,
					listing,
					setListing,
					filteredData,
				}}>
				<HeaderNav />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/Feed' element={<FeedPage />} />
					<Route exact path='/:listing_id' element={<MainPage />} />
					<Route path='/Contact' element={<ContactPage />} />
					<Route path='/Services' element={<ServicePage />} />
					<Route path='/About' element={<About />} />
				</Routes>
			</PropertyContext.Provider>
			<Footer />
		</div>
	);
}


export default App;
