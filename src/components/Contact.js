import React from 'react'
import Joan from '../css/images/joan-and-katie.jpg';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Contact extends React.Component {
	render() {
		const text = <p>We enjoy <span>every minute</span> we spend working with our students, and welcome any and all feedback. If you are a <span>current student and would like to share a success story</span>, please mention this at the beginning of your comment.</p>

		return(
			<CSSTransitionGroup
		          component="div"
		          transitionName="fadeIn"
		          transitionAppear={true}
		          transitionAppearTimeout={1500}
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={500}
		          className="page-wrapper contact-wrapper">
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
			</CSSTransitionGroup>
		)
	}
}

export default Contact;
