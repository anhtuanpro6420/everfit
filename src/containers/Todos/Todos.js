import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Todos.scss';

const Todos = () => {

	return (
		<>
		<h1>Todos</h1>
		<Link to="/new-feeds">New feeds</Link>
		</>	
	);
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
