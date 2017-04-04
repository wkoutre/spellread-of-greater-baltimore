import React from 'react';
// import MyLink from './MyLink';
// import MyLi from './MyLi';
import { timeQuote, symptoms, whatWeKnow } from './content/_parentResources';

class ParentResources extends React.Component {

	render() {
		return (
			<div className="page-wrapper resources-wrapper">
				{timeQuote}
				{symptoms}
				{whatWeKnow}
			</div>
		)
	}
}

export default ParentResources;
