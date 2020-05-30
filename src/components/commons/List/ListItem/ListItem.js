import React from 'react';
import CheckBox from 'src/components/commons/CheckBox/CheckBox';
import Input from 'src/components/commons/Input/Input';

const ListItem = (props) => {
	const {item, onSelectCheckBox, onInputChange} = props;
	return (
		<>
			<CheckBox checked={false} onChange={onSelectCheckBox}/> <Input value={item} onChange={onInputChange}/>
		</>
	)
}

export default ListItem
