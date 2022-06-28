/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

import { getProducts as listProducts } from "../redux/actions/productActions";

const Home = (props) => {
	const dispatch = useDispatch();

	const [searchKeyword, setSearchKeyword] = useState("");
	const [sortOrder, setSortOrder] = useState("");
	const category = props.match.params.id ? props.match.params.id : "";
	const getProduct = useSelector((state) => state.getProducts);
	const { products, loading, error } = getProduct;

	// useEffect(() => {
	// 	dispatch(listProducts(category));
	// }, [category]);
	return (
		<div className="product-box">
			<div className="product-main">
				<h2 className="title">New Products</h2>
				<div className="product-grid">
					{/* {loading ? (
						<Box sx={{ width: "100%" }}>
							<LinearProgress />
						</Box>
					) : error ? (
						<Stack sx={{ width: "100%" }} spacing={2}>
							<Alert severity="error">
								<AlertTitle>Error</AlertTitle>
								<strong>{error}</strong>
							</Alert>
						</Stack> 
					) : (
						products.map((product) => ( */}
							<div className="showcase">
								<div className="showcase-banner">
									<img
										src="{product.imageUrl1}"
										alt="Mens Winter Leathers Jackets"
										width="300"
										className="product-img default"
									/>
									<img
										src="{product.imageUrl2}"
										alt="Mens Winter Leathers Jackets"
										width="300"
										className="product-img hover"
									/>

									<p className="showcase-badge"> new </p>

									<div className="showcase-actions">
										<button className="btn-action">
											<ion-icon name="heart-outline"></ion-icon>
										</button>

										<button className="btn-action">
											<ion-icon name="eye-outline"></ion-icon>
										</button>

										<button className="btn-action">
											<ion-icon name="repeat-outline"></ion-icon>
										</button>

										<button className="btn-action">
											<ion-icon name="bag-add-outline"></ion-icon>
										</button>
									</div>
								</div>

								<div className="showcase-content">
									<a href="#" className="showcase-category">
										Bag
									</a>

									<a href="#">
										<h3 className="showcase-title">
											Mens Winter Leathers Jackets
										</h3>
									</a>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358; 5000 </p>
										<del>&#8358;7000</del>
									</div>
								</div>
							</div>
						
				</div>
			</div>
		</div>
	);
};

export default Home;
