import React from 'react';
import * as ActionTypes from './actionTypes';

const INITIAL_STATE = {
	products : null
};

export default function Reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ActionTypes.GET_PRODUCTS: {
			return Object.assign({}, state, {products: action.payload})
		}
		case ActionTypes.FILTER_PRODUCT: {
			return Object.assign({}, state, {products: state.products.filter((product) => product.name.includes(action.payload))})
		}
		default : {
			return state;
		}
	}
}