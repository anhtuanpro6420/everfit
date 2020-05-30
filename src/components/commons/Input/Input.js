import React from 'react'

const Input = (props) => {
	const {value, onChange, onKeyDown} = props
	return (
		<input value={value} onChange={onChange} onKeyDown={onKeyDown}/>
	)
}

export default Input
