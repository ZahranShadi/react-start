import _ from 'lodash';
import React from 'react';
import FoodListHeader from './food-list-header';
import FoodItem from './food-item';
import AddFood from './add-food';
import 'react-bootstrap';

export default class FoodList extends React.Component {

	renderItems(){
		const props = _.omit(this.props, 'food');

		return _.map(this.props.food, (foodItem, index) => <FoodItem key={index} {...foodItem} {...props} />);
	}

	render() {
		return (
			<div style={{width: '100%'}}>
				<table style={{width: '95%', margin: 'auto'}}>
					<FoodListHeader addFood={this.props.addFood.bind(this)}/>					
					<tbody bordered>
						{this.renderItems()}
					</tbody>
				</table>
			</div>
		);
	}
}