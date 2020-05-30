import React from 'react';
import ListItem from 'src/components/commons/List/ListItem/ListItem';

const List = (props) => {
	const {data, onSelectItem, onInputItemChange} = props;
	let listRender = null;
	if (data && data.length) {
		listRender = (
			<ul>
				{data.map((item, index) => <li key={index}><ListItem item={item} onSelectCheckBox={onSelectItem} onInputChange={onInputItemChange}/></li>)}
			</ul>
		)
	}
	return listRender;
}

export default List
