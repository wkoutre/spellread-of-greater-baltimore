import React from 'react'

const MyLink = (props) => {
	return(
		<a id={props.id} href={props.link} target="_blank">{props.text}</a>
	)
}

MyLink.propTypes = {
	link: React.PropTypes.string.isRequired,
}

export default  MyLink;
