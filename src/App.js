import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { PropertyContext } from './components/Context/PropertyContext';
import Homepage from './pages/Homepage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';
import HOUSE_DATA from './HouseData';


function App() {
	const [user, setUser] = useState({
		username: '',
		loggedin: false,
	});

	const [listings, setListings] = useState([]);	
	const [filteredData, setFilteredData] = useState([])
	useEffect(()=> {
		setListings(HOUSE_DATA)
	},[])


		const handleFilter = (event) => {
			const searchParam = event.target.value;
			const newFilter = listings.filter((value) => {
				return value.postal_code
					.toLowerCase()
					.includes(searchParam.toLowerCase());
			})
			if (searchParam === '') {
				setFilteredData('');
			} else {
				setFilteredData(newFilter);
			}
			console.log(listings);
		};


	return (
		<div>
			<PropertyContext.Provider value={{ user, setUser, listings, setListings, handleFilter, filteredData }}>
				<HeaderNav />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/Feed' element={<Feed />} />
				</Routes>
				<Footer />
			</PropertyContext.Provider>

		</div>
	);
}


export default App;
