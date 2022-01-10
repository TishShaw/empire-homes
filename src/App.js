import React, {useState, useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { PropertyContext } from './components/Context/PropertyContext';
import Homepage from './pages/Homepage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Feed from './components/Feed/Feed';
import MainPage from './pages/MainPage';
import Footer from './components/Footer/Footer';
import PropertyDetailHeader from './components/PropertyDetails/PropertyDetail-Header';





function App() {
	const [user, setUser] = useState({
		username: '',
		loggedin: false,
	});	
	const [listings, setListings] = useState([]);

	useEffect(() => {
		fetch(
			'https://us-real-estate.p.rapidapi.com/v2/for-sale?offset=0&limit=42&state_code=MI&city=Detroit&sort=newest',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_US_REAL_ESTATE_KEY,
				},
			}
		)
			.then((response) => response.json())
			.then((response) => {
				setListings(response.data.home_search.results);
				console.log(response.data.home_search.results.primary_photo.href);
				console.log(response.data.home_search.results);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<PropertyContext.Provider
				value={{
					user,
					setUser,
					listings,
					setListings,
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
