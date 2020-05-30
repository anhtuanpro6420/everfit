import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'src/App.scss';
import Todos from 'src/containers/Todos/Todos';
import Newfeeds from 'src/containers/Newfeeds/Newfeeds';

const App = props => {
	const routes = (
			<Switch>
				<Route path="/new-feeds" component={Newfeeds} />
				<Route path="/" exact component={Todos} />
				<Redirect exact to="/" />
			</Switch>
		);

	return (
			<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
	);
};

const mapStateToProps = state => {
	return {
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
