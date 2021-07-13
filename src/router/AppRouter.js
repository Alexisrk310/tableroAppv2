import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { About } from '../components/About';
import { Auth } from '../components/Auth';
import { Board } from '../components/Board';
import { Home } from '../components/Home';
import GuardRoute from './PrivateRoute';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<GuardRoute path="/board" component={Board} />
					<Route path="/about" exact component={About} />
					<Route path="/auth" exact component={Auth} />
					<Route path="/" exact component={Home} />

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
