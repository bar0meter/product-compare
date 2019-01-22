import React, { Fragment, Component } from "react";
import ProductItem from "./ProductItem";

import "./Products.css";

class Products extends Component {
	state = {
		products: []
	};

	render() {
		return (
			<div className="Products">
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		);
	}
}

export default Products;
