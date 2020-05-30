import React from 'react';
import './Card.scss';

const Card = (props) => {
	const {item} = props || {};
	const {avatar, email, last_name} = item || {};
	return (
		<div className="card">
		  <img className="card-img" src={avatar} alt="email" />
		  <div className="card-body">
			<h4 className="card-title">{last_name}</h4>
			<p className="card-text">{email}</p>
		  </div>
		</div>
	)
}

export default Card
