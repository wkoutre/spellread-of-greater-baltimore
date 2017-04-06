import React from 'react';
import { Link } from 'react-router-dom';
import { citedURL, quote, author } from './content/_landing';
import CSSTransitionGroup from 'react-addons-css-transition-group';
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
				
				<Link to="/dyslexia-facts"><span className="continue">Continue</span></Link>
			</div>
            )

		return (
			<CSSTransitionGroup
			          component="div"
			          transitionName="fadeIn"
			          transitionAppear={true}
			          transitionAppearTimeout={1500}
			          transitionEnterTimeout={500}
			          transitionLeaveTimeout={500}
			          className="page-wrapper landing-wrapper">
				{quoteDiv}
			</CSSTransitionGroup>
		)
	}
}

export default Landing;
