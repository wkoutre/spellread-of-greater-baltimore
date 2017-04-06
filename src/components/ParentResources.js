import React from 'react';
// import MyLink from './MyLink';
// import MyLi from './MyLi';
import { timeQuote, symptoms, whatWeKnow } from './content/_parentResources';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class ParentResources extends React.Component {

	render() {
		return (
			<CSSTransitionGroup
		          component="div"
		          transitionName="fadeIn"
		          transitionAppear={true}
		          transitionAppearTimeout={1500}
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={500}
		          className="page-wrapper resources-wrapper">
				{timeQuote}
				{symptoms}
				{whatWeKnow}
			</CSSTransitionGroup>
		)
	}
}

export default ParentResources;
