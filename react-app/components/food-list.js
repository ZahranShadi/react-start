import React from 'react';
import CategoriesListHeader from './categories-list-header';
import FoodItem from './food-item';


export default class CategoriesList extends React.Component {
	render() {
		return (
			<table>
				<CategoriesListHeader />
				<FoodItem />
			</table>
		);
	}
}