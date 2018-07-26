import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';

class Search extends React.Component {

	static propTypes = {
		products: PropTypes.arrayOf(PropTypes.shape({
			id:PropTypes.number,
			description:PropTypes.string,
			type:PropTypes.string,
			name:PropTypes.string,
			display_src:PropTypes.string,
		}))
	};

	constructor(props) {
		console.log("constructor");
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.props.actions.getProducts();
	}

	handleKeyUp(e){
		console.log(e.target.value);
		if(e.target.value.trim() == "") {
			this.props.actions.getProducts();
		}
		this.props.actions.filterProducts(e.target.value);
	}

	render() {
		console.log("render");
		if(!this.props.products) {
			return 'Hello';
		}
		return (
			<div>
				<input id="myInput" type="text" aria-label="Search" title="Search" placeholder="Search.." onKeyUp={this.handleKeyUp}></input>

				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Desp</th>
							<th>type</th>
							<th>Name</th>
							<th>Image</th>
						</tr>
					</thead>
					<tbody id="myTable">
						{(this.props.products).map(product => (
							<Product key={product.id} details={product} index={product.id} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Search;