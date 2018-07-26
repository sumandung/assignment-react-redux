import { combineReducers, createStore } from 'redux';
import products from './reducers';

let rootReducer = combineReducers({
	reducer : products
})

export default function configureStore(){
	return createStore(  rootReducer, 
						  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
					  );
}