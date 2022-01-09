import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.styles.css';


function Footer(props) {
	return (
		<div className='footer-container'>
			<div className='socials'>
				<LinkedInIcon />
				<InstagramIcon />
				<FacebookIcon />
			</div>
			<span> &copy; 2022 Empire Homes Corporation</span>
		</div>
	);
}

export default Footer;
