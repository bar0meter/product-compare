import React, { Fragment, Component } from "react";

import Products from "./Products/Products";
import CompareProduct from "./CompareProduct/CompareProduct";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [], compareProducts: [] };
		this.handleCompareProducts = this.handleCompareProducts.bind(this);
	}

	handleCompareProducts(id) {
		let { compareProducts } = this.state;
		const index = compareProducts.findIndex(prodId => prodId === id);
		if (index === -1) {
			compareProducts.push(id);
		} else {
			compareProducts.splice(index, 1);
		}
		this.setState({ compareProducts });
	}

	componentDidMount() {
		fetch(`/products.json`)
			.then(res => res.json())
			.then(data => this.setState({ products: data.products }));
	}

	render() {
		const { products, compareProducts } = this.state;
		return (
			<div className="wrapper">
				<h2>Compare Products</h2>
				<Products
					onCompareProducts={this.handleCompareProducts}
					products={products}
				/>
				<CompareProduct compareProducts={compareProducts} data={products} />
			</div>
		);
	}
}

export default Home;
