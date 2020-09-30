import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default function Header() {
	return (
		<div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
			</ul>

			<hr />
		</div>
	);
}
