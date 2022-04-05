import React, {useEffect} from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
// import { googleAuthenticate } from '../redux/actions/authActions';
// import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import queryString from 'query-string';


function Layout(props) {
	//  const location = useLocation();
	// 	useEffect(() => {
	// 		const values = queryString.parse(location.search);
	// 		const state = values.state ? values.state : null;
	// 		const code = values.code ? values.code : null;
	// 		console.log('State: ' + state);
	// 		console.log('Code: ' + code);
	// 		if (state && code) {
	// 			props.googleAuthenticate(state, code);
	// 		}
	// 	}, [location]);
	return (
		<>
			{/* <HeaderNav /> */}
			<Navbar />
			{props.children}			
			<Footer />
		</>
	);
}

export default Layout;
