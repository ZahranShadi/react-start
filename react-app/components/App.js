import React from 'react';
import _ from 'lodash';
import AddFood from './add-food';
import FoodList from './food-list';

const food = [];
var foundItem = {};

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			food
		};
	}

   	render() {
      	return (
	      	<div style={{marginTop: '30px'}}>
		    	<h1 style={{textAlign: 'center'}}>Calorie Tracker</h1>
		    	<br/>
		    	<FoodList
			    	food={this.state.food} 
			    	saveFoodItem={this.saveFoodItem.bind(this)} 
			    	deleteFoodItem={this.deleteFoodItem.bind(this)}
			    	addFood={this.addFood.bind(this)}
			    />
	        </div>
      	);
   	}

   	addFood(name, calories, protein, carbohydrates, fat) {

   		this.state.food.push({
   			name,
   			calories,
   			protein,
   			carbohydrates,
   			fat
   		});

   		this.setState({ food: this.state.food });

   	}

   	saveFoodItem(oldItem, newItem) {

   		var foundItem = _.find(this.state.food, foodItem => JSON.stringify(foodItem) === JSON.stringify(oldItem));

   		foundItem.name = newItem.name;
   		foundItem.calories = newItem.calories;
   		foundItem.protein = newItem.protein;
   		foundItem.carbohydrates = newItem.carbohydrates;
   		foundItem.fat = newItem.fat;

   		this.setState({ food: this.state.food });
	}

	deleteFoodItem(selectedItem) {
		_.remove(this.state.food, foodItem => JSON.stringify(foodItem) === JSON.stringify(selectedItem));
		this.setState({ food: this.state.food });
	}
}