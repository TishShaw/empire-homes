import React from 'react';
import Logo from '../../assets/images/1.png';
import { Data } from '../../data/FooterData';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.styles.css';

function Footer(props) {
	return (
		<div className='footer-container'>
			<div className='list-wrapper'>
				<div className='socials'>
					<img src={Logo} className='footer-logo' />
				</div>
				{
					Data.map((item) => {
						return (
							<ul className='list-container'>
								<h6 className='footer-heading'>{item.title}</h6>
								<li className='footer-item'>{item.listItemOne}</li>
								<li className='footer-item'>{item.listItemTwo}</li>
								<li className='footer-item'>{item.listItemThree}</li>
							</ul>
						);
					})
				}
			</div>

			<span className='copyright'> &copy; 2022 Empire Homes Corporation</span>
		</div>
	);
}

export default Footer;
