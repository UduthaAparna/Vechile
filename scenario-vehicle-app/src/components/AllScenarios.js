import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import ScenarioItem from './ScenarioItem';
import axios from 'axios';


function AllScenarios() {
	const appUrl = "http://localhost:3000";
	const [scenarios, setScenarios] = useState([]);
	const [isRefresh, setIsRefresh] = useState(false);
	
	useEffect(() => {
		//fetch("http://localhost:3000/scenarios").then(res => res.json()).then(res => setScenarios(res));
		axios.get(`${appUrl}/scenarios`).then((response) => {
			setScenarios(response.data);
		  });
	},[isRefresh]);
	  
	const deleteAllHandler = () => {
		let urls = [];
		
		}

	if(scenarios.length > 0) {
		return (
		  <div className="main-container">
			
			<div id="all-scenarios">
			  <table id="scenarios">
				<thead>
				  <tr>
					<th>Scenario id</th>
					<th>Scenario Name</th>
					<th>Scenario Duration</th>
					<th>Number of Vehicles</th>
					<th>Add Vehicles</th>
					<th>Edit</th>
					<th>Delete</th>
				  </tr>
				</thead>
				<tbody>
				  {scenarios.map((sc) => {
					return (
					  <ScenarioItem
						key={sc.id}
						scenario={sc}
						refresh={setIsRefresh}
						isRefresh = {isRefresh}
					  />
					);
				  })}
				</tbody>
			  </table>
			</div>
		  </div>
		);
	  }
}

export default AllScenarios
