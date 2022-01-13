import React,{ useState } from 'react';
import './ContactForm.styles.css';

function ContactForm({listing}) {

	const initialState = {
		firstName: '',
		lastName:'',
		email: '',
		phoneNumber:'',
		message:'',
	};

	const [send, setSend] = useState(false);
	const [formState, setFormState] = useState(initialState);

	const handleSubmit = (event) => {
	event.preventDefault();
	setFormState(initialState);
	setSend(true);
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
    return (
			<div className='contact-form__container'>
				<h2 className='contact-title'>Contact Us</h2>
				<form className='contact-form__form'>
					<input
						className='contact-form__fn'
						type='text'
						id='firstName'
						placeholder='First Name'
						onChange={handleChange}
						value={formState.firstName}
						required
					/>
					<input
						type='text'
						id='lastName'
						placeholder='Last Name'
						onChange={handleChange}
						value={formState.lastName}
						required
					/>
					<input
						className='contact-form__ln'
						type='text'
						id='email'
						placeholder='Your Email'
						onChange={handleChange}
						value={formState.email}
						required
					/>
					<input
						className='contact-form__pn'
						type='text'
						id='phoneNumber'
						placeholder='Phone Number'
						onChange={handleChange}
						value={formState.phoneNumber}
					/>
					<textarea
						row='10'
						cols='50'
						className='contact-form__text-area'
						type='message'
						id='message'
						placeholder='I would like to inquire about the property at this location'
						onChange={handleChange}
						value={formState.message}
					/>
				</form>
				<button onClick={handleSubmit} className='contact-form__btn'>
					Send Message
				</button>
				{send ? <p>message sent !</p> : ''}
			</div>
		);
}

export default ContactForm;