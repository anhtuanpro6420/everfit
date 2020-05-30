import React from 'react'

const Button = (props) => {
	const {name, onClick} = props;
	return (
		<button type="button" onClick={onClick}>{name}</button>
	)
}

export default Button
