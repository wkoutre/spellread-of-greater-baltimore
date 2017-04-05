import React from 'react';
import { Link } from 'react-router-dom';
import { citedURL, quote, author } from './content/_landing';
// import CSSTransitionGroup from 'react-addons-css-transition-group';
// import ReactTransitionGroup from 'react-addons-css-transition-group';

class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMouseInside: false
		}
	}

	// showMoreInfo = () => {
	// 	this.setState({ isMouseInside: true })
	// }

	// hideMoreInfo = () => {
	// 	this.setState({ isMouseInside: false })
	// }

	render() {

		// const arrowClasses = "down-arrow animated pulse infinite";


            const quoteDiv = (
            	<div key="landing" className="landing">
				<blockquote>
					{quote}
					<cite>
						<a
						onMouseEnter={this.showMoreInfo}
						onMouseLeave={this.hideMoreInfo}
						className="landing-quote"
						href={citedURL}
						target="_blank">
							{author}
						</a>
					</cite>
				</blockquote>
				
				<Link to="/why-spellread-works"><span className="continue">Continue</span></Link>
			</div>
            )

		return (
			<div className="page-wrapper">
				{quoteDiv}
			</div>
		)
	}
}

export default Landing;
