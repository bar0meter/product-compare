import React from "react";

const ProductItem = props => {
	return (
		<div className="productItem card">
			<div className="productImage">
				<img src="/images/Cherry.png" alt=""  />
			</div>
			<div className="onhoverDiv">
				<button>Compare</button>
			</div>
			<div className="productDetails">
				<div className="productDetails-header">
					<h4>Cherry</h4>
					<div className="spacer" />
					<div className="productPrice">$ 1.99</div>
				</div>
				<div className="productDetails-body">Two Cherries</div>
			</div>
		</div>
	);
};

export default ProductItem;
