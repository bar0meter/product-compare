import React, { Component } from "react";

class ProductItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			addedToCompare: false
		};
	}

	handleClick() {
		const id = this.props.product.id;
		this.setState(prevState => ({ addedToCompare: !prevState.addedToCompare }));
		this.props.onAddToCompare(id);
	}

	render() {
		const { product } = this.props;
		const { addedToCompare } = this.state;
		return (
			<div className="productItem card">
				<div className="productImage">
					<img src={`/${product.image}`} alt="" />
				</div>
				<div className="onhoverDiv">
					<button onClick={this.handleClick}>
						{addedToCompare ? "Remove" : "Compare"}
					</button>
				</div>
				<div className="productDetails">
					<div className="productDetails-header">
						<h4>{product.name}</h4>
						<div className="spacer" />
						<div className="productPrice">{product.price}</div>
					</div>
					<div className="productDetails-body">{product.description}</div>
				</div>
			</div>
		);
	}
}

export default ProductItem;
