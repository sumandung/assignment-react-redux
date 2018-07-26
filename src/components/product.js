
import React from 'react';

const Product = (props) => {
	const {id,description:desp,type,name,display_src : image} = props.details;
	return (
		<tr>
	      <td>{id}</td>
	      <td>{desp}</td>
	      <td>{type}</td>
	      <td>{name}</td>
	      <td><img aria-label={name} alt={name} src={image}></img></td>
	    </tr>
	);
}

export default Product;
