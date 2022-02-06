import React, { Fragment, useEffect, useState } from "react";
import CustomPopover from "./Popover";
import Product from "./Product";
import ClearIcon from "@mui/icons-material/Clear";
import Header from "./Header";
import { Grid } from "@mui/material"
const URL = "https://dnc0cmt2n557n.cloudfront.net/products.json";

const Home = () => {
	const [toggle, setToggle] = useState(null);
	const [products, setProducts] = useState([]);

	const handleToggle = (event) => {
		setToggle(event.currentTarget);
	};

	const handleClose = () => {
		setToggle(null);
	};

	const getProducts = () => {
		if (localStorage.getItem("products"))
			setProducts(JSON.parse(localStorage.getItem("products")));
		else
			fetch(URL).then((response) => response.json())
				.then((json) => {
					const productInCart = json.products.map((product) => ({
						...product,
						count: 1,
					}));
					setProducts(productInCart);
				});
	};

	const onchangeCount = (productId, value) => {
		let newProducts = [...products];
		let currentIndex = newProducts.findIndex((item) => item.id === productId);
		newProducts[currentIndex]["count"] = value;
		localStorage.setItem("products", JSON.stringify(newProducts));
		setProducts(newProducts);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (

		<div>
			<Grid container
				direction="row"
				justifyContent="center"
				alignItems="center">
				<Grid item xs={12} md={12}>
					<Header handleToggle={handleToggle} products={products} />
					<div className='mainContent'>
						{(products != null && products.length > 0)
							? products.map((item) => (
								<Fragment key={item.id}>
									{" "}
									<Product
										onchangeCount={onchangeCount}
										product={item}
									/>
								</Fragment>
							))
							: "No Items"}
					</div>
					{toggle && (
						<CustomPopover toggle={toggle} handleClose={handleClose}
							handleToggle={handleToggle}>
							<div>
								{(products != null && products.length > 0)
									? products
										.filter((item) => item.count > 0)
										.map((product) => (
											<div className='cartItem' key={product.id}>
												<div style={{ display: "flex" }}>
													<span
														onClick={() =>
															onchangeCount(product.id, 0)
														}
													>
														<ClearIcon style={{ color: "white", marginTop: "12px" }} />{" "}
													</span>
													<div className='info'>
														<p>{product.title}</p>{" "}
														<b className='productDesc'>
															{"$"}
															{product.price * product.count}
														</b>
													</div>
												</div>
												<div>Qty {product.count}</div>
											</div>
										))
									: <div className="cartItem" key={1}>"No Items"</div>}
							</div>
						</CustomPopover>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
