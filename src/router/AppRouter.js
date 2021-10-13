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
					<GuardRoute path="/board" component={Board} /><Route exact path="/about" component={About} />
					<Route exact path="/auth" 
					component={Auth} />
					<Route exact path="/" component={Home} />

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
