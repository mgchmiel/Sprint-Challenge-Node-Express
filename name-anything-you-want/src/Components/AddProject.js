import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const AddProject = props => {
	function handleSubmit(event) {
		event.preventDefault();
		const input = Array.from(event.target.querySelectorAll('input'));
		const newProj = {
			id: input[0].value,
			text: input[1].value,
		};
		axios
			.post(`http://localhost:5000/api/projects`, newProj)
			.then(function(response) {
				props.history.push('/projects');
			})
			.catch(function(error) {
				console.log('error:', error);
			});
	}
	return (
		<div>
			<form className="text" onSubmit={handleSubmit}>
				<label>Project</label>
				<input type="text" name="user" />
				<input type="text" name="text" />
				<input type="submit" value="Submit" />
			</form>
			<div>
				<Link to="/projects">Return</Link>
			</div>
		</div>
	);
};