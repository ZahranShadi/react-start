import React from 'react';
import 'react-bootstrap';
import AddFood from './add-food';

export default class FoodListHeader extends React.Component {
	render() {
		return (
			<thead class="thead-dark">
				<AddFood addFood={this.props.addFood.bind(this)}/>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Calories</th>
					<th scope="col">Protein</th>
					<th scope="col">Carbohydrates</th>
					<th scope="col">Fat</th>
				</tr>
			</thead>
		);
	}
}