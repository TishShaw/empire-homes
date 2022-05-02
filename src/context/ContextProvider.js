import React, {useState, useEffect} from 'react';
import ContextData from './Context';
import axios from 'axios';

function ContextProvider(props) {
    const [listing, setListing] = useState([]);

    const retrieveListings = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.get('http://127.0.0.1:5500/listings.json')
            console.log(data)
            setListing(data)
        } catch (error) {
            console.log(error)
        }
        
    }   

    useEffect(() => {
        retrieveListings()
    }, [])

    return (
        <ContextData.Provider value={{listing, setListing}}>
            {props.children}
        </ContextData.Provider>
    );
}

export default ContextProvider;