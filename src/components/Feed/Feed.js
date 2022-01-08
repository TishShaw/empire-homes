import React, {useState, useEffect} from 'react';
import Card from '../Card/Card'
import './Feed.styles.css';

function Feed() {
    const [listing, setListing] = useState([])
    const [image, setImage] = useState(null)

var axios = require('axios').default;

    useEffect(() => {
        var options = {
					method: 'GET',
					url: 'https://us-real-estate.p.rapidapi.com/for-sale',
					params: {
						offset: '0',
						limit: '42',
						state_code: 'MD',
						city: 'Columbia',
						sort: 'newest',
					},
					headers: {
						'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
						'x-rapidapi-key': process.env.REACT_APP_US_REAL_ESTATE_KEY,
					},
				};
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data.data.results);
            console.log(response.data.data.results[0].primary_photo.href);
            setListing(response.data.data.results);
        })
        .catch(function (error) {
            console.error(error);
        })
}, []);
    if (!listing.length){ 
        return <h2>Loading...</h2>
    } else {
        return (
					<div className='wrapper-grid'>
						{listing.map((item) => (
							<div key={item.listing_id}>
								<Card
									image={item.primary_photo}
									item={item}
									price={item.list_price}
									description={item.description}
								/>
							</div>
						))}
					</div>
				);
    }
}

export default Feed;