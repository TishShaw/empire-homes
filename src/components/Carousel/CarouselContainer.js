import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Carousel.style.css';

function CarouselContainer({ listing }) {

	const images = [
		{
			original: listing.listing_photo,
			thumbnail: listing.listing_photo,
		},
		{
			original: listing.interior_photo1,
			thumbnail: listing.interior_photo1,
		},
		{
			original: listing.interior_photo2,
			thumbnail: listing.interior_photo2,
		},
		{
			original: listing.interior_photo2,
			thumbnail: listing.interior_photo2,
		},
		{
			original: listing.interior_photo3,
			thumbnail: listing.interior_photo3,
		},
		{
			original: listing.interior_photo4,
			thumbnail: listing.interior_photo4,
		},
		{
			original: listing.interior_photo5,
			thumbnail: listing.interior_photo5,
		},
		{
			original: listing.interior_photo6,
			thumbnail: listing.interior_photo6,
		},
		{
			original: listing.interior_photo7,
			thumbnail: listing.interior_photo7,
		},
		{
			original: listing.interior_photo8,
			thumbnail: listing.interior_photo8,
		},
		{
			original: listing.interior_photo9,
			thumbnail: listing.interior_photo9,
		},
		{
			original: listing.interior_photo10,
			thumbnail: listing.interior_photo10,
		},
	];

	return (
		<div>
			<ImageGallery items={images} />
		</div>
	);
}

export default CarouselContainer;
