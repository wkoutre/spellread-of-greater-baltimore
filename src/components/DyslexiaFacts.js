import React from 'react';
import { whatDoYouKnow, readingIsntDifficult, signsAndIndicators, progress } from './content/_dyslexiaFacts';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const DyslexiaFacts = (props) => {
	return (
		 <CSSTransitionGroup
          component="div"
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className="page-wrapper dyslexia-facts-wrapper">
			{whatDoYouKnow}
			{signsAndIndicators}
			{readingIsntDifficult}
			{progress}
		</CSSTransitionGroup>
	)
}

export default DyslexiaFacts;
