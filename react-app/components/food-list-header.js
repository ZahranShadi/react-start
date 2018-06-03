import React from 'react';
import './Style.css';

export default class FoodListHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>Name</th>
					<th>Calories</th>
					<th>Protein</th>
					<th>Carbohydrates</th>
					<th>Fat</th>
				</tr>
			</thead>
		);
	}
}