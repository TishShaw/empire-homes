import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { PropertyContext } from './components/Context/PropertyContext';
import Homepage from './pages/Homepage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Feed from './components/Feed/Feed';
import MainPage from './pages/MainPage';
import Footer from './components/Footer/Footer';
import PropertyDetailHeader from './components/PropertyDetails/PropertyDetail-Header';





function App() {
	const [listings, setListings] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const [user, setUser] = useState({
		username: '',
		loggedin: false,
	});	

		useEffect(() => {
			fetch('http://127.0.0.1:5500/src/listings2.json', {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_US_REAL_ESTATE_KEY,
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setListings(res);
				})
				.catch((err) => {
					console.error(err);
				});
		}, []);

const handleFilter = (event) => {
	const target = event.target.value;
	const filterArr = listings.filter((value) => {
		console.log(value);
		return value.location.address.line.toLowerCase().includes(target.toLowerCase());
	})
	setFilteredData(filterArr)

};

	return (
		<div>
			<PropertyContext.Provider
				value={{
					user,
					setUser,
					handleFilter,
					listings,
					setListings,
					filteredData,
				}}>
				<HeaderNav />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/Feed' element={<Feed />} />
					<Route exact path='details/:id' element={<PropertyDetailHeader />} />
				</Routes>
			</PropertyContext.Provider>
			<Footer />
		</div>
	);
}


export default App;
