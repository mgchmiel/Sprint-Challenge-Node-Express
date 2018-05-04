import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ProjectList from './Components/ProjectList.js';
import { AddProject } from './Components/AddProject.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={App} />
			<Route exact path="/projects" component={ProjectList} />
			<Route exact path="/addProject" component={ AddProject } />
		</div>
	</Router>,
	document.getElementById('root')
);