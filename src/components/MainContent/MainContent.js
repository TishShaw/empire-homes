import React from 'react';
import './MainContent.styles.css';

function MainContent(props) {
    return (
			<div className='MainContent__container'>
				<div className='MainContent__intro-text1'>
					<img
						className='image'
						src='https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=450'
						alt='pic'
					/>
					<h2 className='MainContent__intro-text-title'>
						A move in the right direction
					</h2>
					<p className='MainContent__intro-text-par'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa
						cumque, vitae cupiditate soluta culpa quos a expedita?
					</p>
					<button>Learn More</button>
				</div>
				<div className='MainContent__containerDiv-text'>
					<img
						className='image-two'
						src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=940'
						alt='pic-two'
					/>
					<div className='MainContent__intro-text2'>
						<h2 className='MainContent__intro-text-second-title'>
							Get Real-Time market update
						</h2>
						<p className='MainContent__intro-text-par'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							ipsa cumque, vitae cupiditate soluta culpa quos a expedita?
						</p>
						<button>Learn More</button>
					</div>
				</div>
			</div>
		);
}

export default MainContent;