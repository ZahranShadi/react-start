import React from 'react';

export default class FoodItem extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			isEditing: false;
		}
	}

	renderActionSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button onClick={this.onEditClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.onDeleteClick.bind(this)}>Delete</button>
			</td>
		);
	}

	render() {
		return (
			<thead>
				<tr>
					<td>{this.props.name}</td>
					<td>{this.props.calories}</td>
					<td>{this.props.protein}</td>
					<td>{this.props.carbohydrates}</td>
					<td>{this.props.fat}</td>
					{this.renderActionSection()}
				</tr>
			</thead>
		);
	}

	onEditClick() {
		this.setState({ isEditing: true})
	}

	onCancelClick() {
		this.setState({ isEditing: false})
	}
}