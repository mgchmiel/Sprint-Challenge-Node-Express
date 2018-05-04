import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-nav">
						<Link to="/">Projects on Project</Link>
						<Link to="/projects">Projects</Link>
					</div>
					<p className="App-title">Project List</p>
				</header>
			</div>
		);
	}
}
export default App;