import React from 'react';
import ImageGallery from 'react-image-gallery';
import { getListings } from '../../redux/actions/listingActions';
import './Carousel.style.css';

function CarouselContainer({ listing }) {
	// const images = listing.map((item) => (
	// 	<>
	// 		original:{item.photos.href}, 
	// 		thumbnail:{item.photos.href}
	// 	</>
	// ));

	const images = [
		{
			original: 'https://picsum.photos/id/1018/1000/600/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
	];

	return (
		<div>
			<ImageGallery items={images} />
		</div>
	);
}

export default CarouselContainer;
