import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Footer from './components/footer/footer';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Login from './components/Login/Login';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
		<div className='grid'>
         <HeaderNav />
			<Routes>
				<Route path='/' element={<Homepage />}/>
				<Route path='/Login' element={<Login />} />
            
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
