import './Property.styles.css';


const PropertyDetails = ({listings}) => {
	return (
		<div>
			<div className='details-stats'>
				<div className='image-section'>
					<img
						className='img-detail'
						src='https://ap.rdcpix.com/ba00c23c0e83db9334ff729fb83a6fe0l-m869946694s-w1024_h768.jpg'
						alt=''
					/>
				</div>
				<div className='facts-wrapper'>
					<div className='facts-details'>
						<h3>Home Facts</h3>
					</div>
				</div>
				<div className='details-description'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
						possimus explicabo, ex nostrum, rem, veniam adipisci ducimus
						similique error ea provident. Ad esse ut consectetur tenetur, eum
						eveniet delectus quaerat ipsum placeat velit tempore sit. Quam ea
						sint dicta, beatae blanditiis libero eos corporis sequi voluptatibus
						molestiae amet quisquam expedita. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Aut aliquid minima expedita quos enim
						fugit quam minus! Consequatur ratione dicta inventore, sit facilis
						provident facere accusamus iste molestiae, similique dolore!
					</p>
				</div>
			</div>
		</div>
	);
};

export default PropertyDetails;