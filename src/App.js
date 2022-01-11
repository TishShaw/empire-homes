import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PropertyContext } from './components/Context/PropertyContext';
import Homepage from './pages/Homepage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';





function App() {
	const [listing, setListing] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const [user, setUser] = useState({
		username: '',
		loggedin: false,
	});	

		useEffect(() => {
			fetch(
				'https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=42&state_code=MI&city=Detroit&sort=newest',
				{
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
						'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY,
					},
				}
			)
				.then((res) => res.json())
				.then((res) => {
					setListing(res.data);
				})
				.catch((err) => {
					console.error(err);
				});
		}, []);

const handleFilter = (event) => {
	const target = event.target.value;
	const filterArr = listing.filter((value) => {
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
					listing,
					setListing,
					filteredData,
				}}>
				<HeaderNav />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/Feed' element={<Feed />} />
					<Route exact path='/:listing_id' element={<MainPage />} />
				</Routes>
			</PropertyContext.Provider>
			<Footer />
		</div>
	);
}


export default App;
