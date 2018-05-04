import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class ProjectList extends Component {
	constructor() {
		super();
		this.state = {
			projects: [ {
				name: '',
				description: ''
			}
		],
	};
}
	remove = event => {
		axios
			.delete('http://localhost:5000/api/projects', {
				params: { id: event.target.id },
			})
			.then(function(response) {
				axios
					.get('http://localhost:5000/api/projects')
					.then(response => console.log(response))
					.catch(error => console.log(`Error`));
			})
			.catch(function(error) {
				console.log(error);
		});
};
	render() {
		return (
			<div>
				<Link to="/addproject">Add Project</Link>
				<h3 className="title">Projects</h3>
				<div className="container">
					{this.state.projects.map((projects, index) => {
						return (
							<div key={index} className="project">
								<button
									className="DeleteButton"
									id={projects.id}
									onClick={this.remove}
								/>
								<div className="project">{projects.name}<br></br>{projects.description}</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
	componentDidMount() {
		axios
			.get('http://localhost:5000/api/projects')
			.then(response => this.setState({ projects: response.data }))
			.catch(error => console.log(`Error`));
	}
}