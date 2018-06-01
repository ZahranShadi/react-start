import React from 'react';

export default class CategoriesListHeader extends React.Component {
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