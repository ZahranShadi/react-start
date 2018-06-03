import React from 'react';
import './Style.css';

var oldItem = {};

export default class FoodItem extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			isEditing: false
		};

		this.onEditClick = this.onEditClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onSaveClick = this.onSaveClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	onEditClick() {
		this.setState({isEditing: true})
	}

	onCancelClick() {
		this.setState({isEditing: false})
	}

	onSaveClick(event) {
		event.preventDefault();

		const oldName = this.props.name;
		const oldCalories = this.props.calories;
		const oldProtein = this.props.protein;
		const oldCarbs = this.props.carbohydrates;
		const oldFat = this.props.fat;

		oldItem = {
			name: oldName,
			calories: oldCalories,
			protein: oldProtein,
			carbohydrates: oldCarbs,
			fat: oldFat
		}

		const newName = this.refs.editName.value;
		const newCalories = this.refs.editCalories.value;
		const newProtein = this.refs.editProtein.value;
		const newCarbs = this.refs.editCarbs.value;
		const newFat = this.refs.editFat.value;

		const newItem = {
			name: newName,
			calories: newCalories,
			protein: newProtein,
			carbohydrates: newCarbs,
			fat: newFat
		}

		this.props.saveFoodItem(oldItem, newItem);		
		this.setState({isEditing: false})
	}

	onDeleteClick(){
		const oldName = this.props.name;
		const oldCalories = this.props.calories;
		const oldProtein = this.props.protein;
		const oldCarbs = this.props.carbohydrates;
		const oldFat = this.props.fat;

		oldItem = {
			name: oldName,
			calories: oldCalories,
			protein: oldProtein,
			carbohydrates: oldCarbs,
			fat: oldFat
		}

		this.props.deleteFoodItem(oldItem);
	}

	renderFoodSection() {
		const foodItem = this.props;

		if (this.state.isEditing) {
			return (
				<tr>
					<td><input type="text" defaultValue={foodItem.name} ref="editName" /></td>
					<td><input type="text" defaultValue={foodItem.calories} ref="editCalories" /></td>
					<td><input type="text" defaultValue={foodItem.protein} ref="editProtein" /></td>
					<td><input type="text" defaultValue={foodItem.carbohydrates} ref="editCarbs" /></td>
					<td><input type="text" defaultValue={foodItem.fat} ref="editFat" /></td>
					<td>
						<button onClick={this.onSaveClick.bind(this)}>Save</button>
						<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
					</td>
				</tr>
			);
		}

		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.calories}</td>
				<td>{this.props.protein}</td>
				<td>{this.props.carbohydrates}</td>
				<td>{this.props.fat}</td>
				<td>
					<button onClick={this.onEditClick.bind(this)}>Edit</button>
					<button onClick={this.onDeleteClick.bind(this)}>Delete</button>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<React.Fragment>
				{this.renderFoodSection()}
			</React.Fragment>
		);
	}
}