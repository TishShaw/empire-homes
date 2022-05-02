import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";

import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
} from 'firebase/auth';


const firebaseConfig = {
	apiKey: 'AIzaSyBhWWV7DgXilxIbpuzTIwfAbD3c_SdzvZc',
	authDomain: 'empirehomes-1ec16.firebaseapp.com',
	projectId: 'empirehomes-1ec16',
	storageBucket: 'empirehomes-1ec16.appspot.com',
	messagingSenderId: '935967435639',
	appId: '1:935967435639:web:229be73391c6fd616f0f72',
	measurementId: 'G-8RZD83EXQK',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
};

export const signUp = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
            console.log(user)
			// ...
		})
		.catch((error) => {

			const errorCode = error.code;
            console.log(errorCode)
			const errorMessage = error.message;
            console.log(errorMessage)
			// ..
		});
};
