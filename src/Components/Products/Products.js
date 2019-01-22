import React, { Fragment, Component } from "react";
import ProductItem from "./ProductItem";

import "./Products.css";

class Products extends Component {
	constructor(props) {
		super(props);
		this.handleAddToCompare = this.handleAddToCompare.bind(this);
	}

	handleAddToCompare(id) {
		this.props.onCompareProducts(id);
	}

	render() {
		const { products } = this.props;
		const displayProducts = products.map((prod, index) => (
			<ProductItem
				key={index}
				product={prod}
				onAddToCompare={this.handleAddToCompare}
			/>
		));
		return <div className="Products">{products.length && displayProducts}</div>;
	}
}

export default Products;
