import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Login/SignUpForm';
import Login from './components/Login/LoginForm';
import Homepage from './pages/Home/Homepage';
import MainPage from './pages/PropertyDetail/MainPage';
import FeedPage from './pages/Feed/FeedPage';
import Layout from './Layout';
import ContactPage from './components/ContactPage/ContactPage';
import Account from './pages/Account/Account';
import axios from 'axios';
import ContextData from './context/Context';
import {collection, addDoc} from 'firebase/firestore';
import { db } from './Firebase';
import {auth} from './Firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from 'firebase/auth';

function App() {
	const [user, setUser] = useState(null);
	const [listing, setListing] = useState([]);
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('useData') ? true : false
	);

	const handleLogin = async (auth, email, password) => {
		await signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				setLoggedIn(true)
			})
			.catch((error) => {
				console.log(error.message);
			});
	}
	

	const getUserInfo = async () => {
		try {
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				if (user) {
					const uid = user.uid;
					console.log(user);
					localStorage.setItem('userData', JSON.stringify(user));

					setUser(uid);
					setLoggedIn(true);
					return;
					
				} else {
					// User is signed out
				setUser(null);
				setLoggedIn(false);
				localStorage.removeItem('userData', JSON.stringify(user));
				return;
				}
			});
			
		} catch (error) {
			console.log(error);
		}
	};

	//  GET LISTINGS ON MOUNT
	useEffect(() => {
		const getListings = async () => {
			let res = await axios.get('http://127.0.0.1:5500/listings.json');

			console.log(res.data);
			setListing(res.data);
		};

		getListings();
		getUserInfo();
		
	}, []);

	// SIGNUP USER

	const handleSignUp = async (auth, email, password) => {
		try {
			const userInfo = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const userId = userInfo.user.uid;
			const userDocRef = await addDoc(collection(db, 'users'), {
				user_uid: userId,
				favorites: []
			});


			console.log(userInfo);
			console.log(userInfo.user.uid);
			console.log(userId);

			setUser({userId: userId, email: userInfo.user.email})
			
			localStorage.setItem('userData', JSON.stringify(userInfo));

		} catch (error) {
			console.log(error.message);
		}
	};

	const handleLogout = async () => {
		console.log(localStorage.getItem('userData'));
		try {
			auth.signOut();
			console.log('User signed out!');
			setUser(null);
			setLoggedIn(false);
			localStorage.removeItem('userData');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<ContextData.Provider
			value={{
				listing,
				setListing,
				handleSignUp,
				handleLogin,
				handleLogout,
				user,
				loggedIn,
			}}>
			<Layout>
				<Routes>
					<Route exact path='/' element={<Homepage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/Contact' element={<ContactPage />} />
					<Route exact path='/account' element={<Account />} />
					<Route path='/:id' element={<MainPage />} />
					<Route path='/Feed' element={<FeedPage />} />
				</Routes>
			</Layout>
		</ContextData.Provider>
	);
}

export default App;
