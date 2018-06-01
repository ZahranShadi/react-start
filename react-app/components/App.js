import React from 'react';
import AddFood from './add-food';
import CategoriesList from './categories-list';

export default class App extends React.Component {
   render() {
      return (
      	<div>
	    	<h1>
	    		Calorie Tracker
	    	</h1>
	    	<AddFood />
	    	<CategoriesList />
        </div>
      );
   }
}