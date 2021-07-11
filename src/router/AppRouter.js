import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { About } from '../components/About';
import { Auth } from '../components/Auth';
import { Board } from '../components/Board';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={Board} />
					<Route path="/about" exact component={About} />
					<Route path="/auth" exact component={Auth} />

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
