import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Feed from './components/Feed/Feed';
import { Routes, Route } from 'react-router-dom';


function App() {
	

	return (
		<div>
        	<HeaderNav />
			<Routes>
				<Route path='/' element={<Homepage />}/>
				<Route path='/Feed' element={<Feed />} />
			</Routes>
		</div>
	);
}

export default App;
