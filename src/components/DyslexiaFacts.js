import React from 'react';
import { whatDoYouKnow, readingIsntDifficult, signsAndIndicators, progress } from './content/_dyslexiaFacts';

const DyslexiaFacts = (props) => {
	return (
		<div className="page-wrapper dyslexia-facts-wrapper">
			{whatDoYouKnow}
			<div className="vertical-line"></div>
			{signsAndIndicators}
			{readingIsntDifficult}
			<div className="vertical-line"></div>
			{progress}
		</div>
	)
}

export default DyslexiaFacts;
