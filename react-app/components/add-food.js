import React from 'react';
import 'react-bootstrap';

export default class AddFood extends React.Component {
  render() {
    return (
      <tr>
        <td><input type="text" placeholder="Name" ref="nameInput"/></td>
        <td><input type="text" placeholder="Calories" ref="caloriesInput"/></td>
        <td><input type="text" placeholder="Protein" ref="proteinInput"/></td>
        <td><input type="text" placeholder="Carbohydrates" ref="carbsInput"/></td>
        <td><input type="text" placeholder="Fat" ref="fatInput"/></td>
        <td><button type="button" class="btn btn-dark" onClick={this.handleAddition.bind(this)}>Add</button></td>
      </tr>
    );
  }

  handleAddition(event) {
    event.preventDefault();

    var formInput = this.refs;

    if (!(formInput.caloriesInput.value == '')) {
      this.props.addFood(formInput.nameInput.value, formInput.caloriesInput.value, 
        formInput.proteinInput.value, formInput.carbsInput.value, formInput.fatInput.value);
    }

    formInput.nameInput.value = '';
    formInput.caloriesInput.value= '';
    formInput.proteinInput.value = '';
    formInput.carbsInput.value = '';
    formInput.fatInput.value = '';
  }
}