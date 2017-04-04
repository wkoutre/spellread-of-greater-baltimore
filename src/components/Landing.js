import React from 'react';
import { Link } from 'react-router-dom';
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
		const citedURL = "https://books.google.com/books?id=jHU02hSTCJsC&pg=PA6&lpg=PA6&dq=In+an+era+when+we+can+image+the+brain+as+an+individual+reads+and+literally+see+the+brain+at+work,+it+is+unacceptable+to+have+children&source=bl&ots=V9Fs4LZph5&sig=m_am3VmYEdvGZF_2SvtEQX1Ayrs&hl=en&sa=X&ei=uNfoVPeZKoe8ggScroT4DQ&ved=0CCoQ6AEwAg#v=onepage&q=In%20an%20era%20when%20we%20can%20image%20the%20brain%20as%20an%20individual%20reads%20and%20literally%20see%20the%20brain%20at%20work%2C%20it%20is%20unacceptable%20to%20have%20children&f=false";
		const quote = <span>In an era when we can image the brain as an individual reads and literally see the brain at work, it is unacceptable to have children and adults struggling to read when they could benefit from what modern neuroscience has taught us about reading and dyslexia.</span>;

		const author = <span>Sally Shaywitz, "Overcoming Dyslexia", c.2003, pg 6.</span>

		// const moreInfoDiv = (
		// 	<div className="more-info">
		// 		<span>For more information, click the quote.</span>
		// 	</div>
		// )

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
				<hr/>
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
