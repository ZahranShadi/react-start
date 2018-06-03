import _ from 'lodash';
import React from 'react';
import FoodListHeader from './food-list-header';
import FoodItem from './food-item';
import AddFood from './add-food';
import './Style.css';

export default class FoodList extends React.Component {

	renderItems(){
		const props = _.omit(this.props, 'food');

		return _.map(this.props.food, (foodItem, index) => <FoodItem key={index} {...foodItem} {...props} />);
	}

	render() {
		return (
			<div>
				<table>
					<FoodListHeader/>
					<AddFood addFood={this.props.addFood.bind(this)}/>
					<tbody>
						{this.renderItems()}
					</tbody>
				</table>
			</div>
		);
	}
}