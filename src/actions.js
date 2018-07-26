import React from 'react';
import * as ActionTypes from './actionTypes';
import products from './sampleData';

export function filterProducts(value){
	return {
		type : ActionTypes.FILTER_PRODUCT,
		payload : value
	}
}

export function getProducts(){
	return {
		type : ActionTypes.GET_PRODUCTS,
		payload : products
	}
}