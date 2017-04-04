import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

	render() {
		console.log(this.context);
		const back = <span className="not-found-back" onClick={() => this.context.router.history.goBack()}>here</span>
		return (
		
			<div className="not-found">
				<h1>404 - Page Not Found</h1>
				<p>Click {back} to go back or&nbsp;
					<Link to="/">click here</Link>&nbsp;to return to SpellRead's landing page.
				</p>
			</div>
			
		)	
	}

	
}

export default NotFound;
