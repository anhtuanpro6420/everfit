import React from 'react'

const CheckBox = (props) => {
	const {checked, onChange} = props
	return (
		<input type="checkbox" defaultChecked={checked} onChange={onChange}/>
	)
}

export default CheckBox
