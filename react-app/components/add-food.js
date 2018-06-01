import React from 'react';

export default class AddFood extends React.Component {
   render() {
      return (
      	<form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Calories" />
          <input type="text" placeholder="Protein" />
          <input type="text" placeholder="Carbohydrates" />
          <input type="text" placeholder="Fat" />
          <button>Add</button>
        </form>
      );
   }
}