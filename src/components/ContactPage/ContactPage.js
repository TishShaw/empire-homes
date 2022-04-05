import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.styles.css';

function ContactPage(props) {

	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_rxouhov',
				'template_niresck',
				form.current,
				'user_IC6A1QVAjRRCP8sAqWQdG'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}

				);
			e.target.reset()
	}

    return (
			<div className='contact-page'>
				<div className='contact-page__hero'>Contact US</div>
				<div className='contact-page__content'>
					<h1 className='contact-page__title'>Get in touch</h1>
					<p className='contact-page__subtext'>
						Whether you are buying, selling, a tenant or a landlord, get in
						touch with us to discuss your property requirements.
					</p>
					<form ref={form} className='contact-page__form' onSubmit={sendEmail}>
						<input
							type='text'
							placeholder='Full Name'
							id='contact-page__name'
							name='name'
						/>
						<input
							type='text'
							placeholder='Contact Number'
							id='contact-page__number'
							name='contact'
						/>
						<input
							type='email'
							placeholder='Email Address'
							id='contact-page__email'
							name='email'
						/>
						<textarea
							rows='2'
							cols='90'
							type='message'
							id='contact-page__message'
							placeholder='Inquiry'
							name='message'
						/>
						<input type='submit' value='send message' className='submit-btn'/>
					</form>
				</div>
			</div>
		);
}

export default ContactPage;