import React, {Fragment, Component} from "react";

import Products from "./Products/Products";

class Home extends Component {
	render() {
		return(
			<div className="wrapper">
				<h2>Compare Products</h2>
				<Products />
			</div>
		)
	}
}

export default Home;