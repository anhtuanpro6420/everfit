import React from 'react';

const List = (props) => {
	const {data} = props;
	let listRender = null;
	if (data && data.length) {
		listRender = (
			<ul>
				{data.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
		)
	}
	return listRender;
}

export default List
