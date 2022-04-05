import React from 'react';
import './Banner.style.css';
function Banners(props) {
    return (
			<div className='banner'>
				<div className='banner-container'>
					<div className='banner-container-section one col-1'>
						<h2 className='banner-title-one'>Consulting Services</h2>
						<p className='banner-paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
							excepturi expedita saepe magni maxime reprehenderit voluptatem qui
							quos perferendis facilis nam corporis totam repellat fugiat
							consectetur minima nulla deleniti id.
						</p>
						<button className='bannerBtn'>Learn More</button>
					</div>
					<div className='banner-container-section two col-2'>
						<h2 className='banner-title-two'>Property Management</h2>
						<p className='banner-paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
							nostrum et deserunt? Inventore, libero fugit? Ad suscipit
							obcaecati, eveniet veritatis, impedit quidem nisi, hic deserunt
							voluptas perspiciatis vel iste doloremque!
						</p>
						<button className='bannerBtn'>Learn More</button>
					</div>
					<div className='banner-container-section one col-3'>
						<h2 className='banner-title-three'>Buying & Selling</h2>
						<p className='banner-paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur mollitia ad fuga nostrum voluptates. Enim, repellendus
							sequi necessitatibus voluptas quis quisquam esse odit labore
							itaque corporis quod cumque, laboriosam illum?
						</p>
						<button className='bannerBtn'>Learn More</button>
					</div>
				</div>
			</div>
		);
}

export default Banners;