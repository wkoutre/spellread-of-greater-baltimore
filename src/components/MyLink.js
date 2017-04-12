import React from 'react';
import PropTypes from 'prop-types';

const MyLink = (props) => {
	return(
		<a id={props.id} href={props.link} target="_blank">{props.text}</a>
	)
}

MyLink.propTypes = {
	link: PropTypes.string.isRequired,
}

export default  MyLink;
