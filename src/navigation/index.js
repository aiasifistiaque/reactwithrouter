import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

export default function BasicRouter() {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/about'>
				<About />
			</Route>
			<Route path='/dashboard'>
				<Dashboard />
			</Route>
		</Switch>
	);
}
