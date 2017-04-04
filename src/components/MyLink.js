import React from 'react'

const MyLink = (props) => {
	return(
		<a href={props.link} target="_blank">{props.text}</a>
	)
}

export default  MyLink;
