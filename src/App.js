import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Login/SignUpForm';
import About from './components/About/About';
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import FeedPage from './pages/FeedPage';
import Login from './components/Login/LoginForm';
import Layout from './components/Layout';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/About' element={<About />} />
					<Route path='/Feed' element={<FeedPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/:id' element={<MainPage />} />
					<Route path='/Contact' element={<ContactPage />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
