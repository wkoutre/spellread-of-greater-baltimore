import React from 'react'
import Joan from '../css/images/joan-and-katie.jpg';

class Contact extends React.Component {
	render() {
		const text = <p>We enjoy every minute that we spend working with our students, and welcome any and all feedback. If you are a <strong><em>current student</em></strong> and would like to share a success story, please mention this at the beginning of your comment.</p>

		return(
			<div className="page-wrapper contact-wrapper">
				<h1>Contact Us</h1>
				<div className="contact-text-pic">
					{text}
				<figure>
					<img src={Joan} alt="Director Joan Collins and her granddaughter, Katie"/>
					<figcaption>Joan Collins, Director</figcaption>	
				</figure>	
				
				</div>
				<form
					className="contact-form"
					autoComplete="on"
					action="">
					<div><span>*First Name:</span> <input
						required
						type="text"
						name="firstname"
						autoComplete="on"
						autoFocus
						placeholder="First name"/></div>
					<div><span>*Last Name:</span> <input required
						type="text" 
						name="lastname"
						autoComplete="on"
						placeholder="Last name"/></div>
					<div><span>*Email: </span><input 
						required 
						type="email" 
						name="user_email" 
						autoComplete="on" 
						placeholder="Email address"/></div>
					<div className="comment-box"><span>*Comments: </span><textarea 
						required 
						name="" 
						id="" 
						cols="30" 
						rows="10" 
						maxLength="500"
						placeholder="Enter your comments here"></textarea></div>
					<button
						type="submit">
						<span>Submit</span>
					</button>
				</form>
			</div>
		)
	}
}

export default Contact;
