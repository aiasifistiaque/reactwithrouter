import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicRouter from './navigation';
import Header from './components/header';

function App() {
	return (
		<div>
			<Header />
			<BasicRouter />
		</div>
	);
}

export default App;
