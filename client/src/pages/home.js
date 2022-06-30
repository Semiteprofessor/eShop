/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

// import { getProducts as listProducts } from "../redux/actions/productActions";

const Home = (props) => {
	// const dispatch = useDispatch();

	// const [searchKeyword, setSearchKeyword] = useState("");
	// const [sortOrder, setSortOrder] = useState("");
	// const category = props.match.params.id ? props.match.params.id : "";
	// const getProduct = useSelector((state) => state.getProducts);
	// const { products, loading, error } = getProduct;

	// useEffect(() => {
	// 	dispatch(listProducts(category));
	// }, [category]);
	return (
		<div className="product-container">
			<main className="container">
				<div className="product-box">
					<div className="product-main">
						<h2 className="title">New Products</h2>

						<div className="product-grid">
							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/jacket-3.jpg")}
										alt="Mens Winter Leathers Jackets"
										width="300"
										className="product-img default"
									/>
									<img
										src={require("../assets/images/products/jacket-4.jpg")}
										alt="Mens Winter Leathers Jackets"
										width="300"
										className="product-img hover"
									/>

									<p className="showcase-badge">15%</p>

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
										jacket
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
										<p className="price">&#8358;48.00</p>
										<del>&#8358;75.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/shirt-1.jpg")}
										alt="Pure Garment Dyed Cotton Shirt"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/shirt-2.jpg")}
										alt="Pure Garment Dyed Cotton Shirt"
										className="product-img hover"
										width="300"
									/>

									<p className="showcase-badge angle black">sale</p>

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
										shirt
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Pure Garment Dyed Cotton Shirt
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;45.00</p>
										<del>&#8358;56.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/jacket-5.jpg")}
										alt="MEN Yarn Fleece Full-Zip Jacket"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/jacket-6.jpg")}
										alt="MEN Yarn Fleece Full-Zip Jacket"
										className="product-img hover"
										width="300"
									/>

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
										Jacket
									</a>

									<h3>
										<a href="#" className="showcase-title">
											MEN Yarn Fleece Full-Zip Jacket
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;58.00</p>
										<del>&#8358;65.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/clothes-3.jpg")}
										alt="Black Floral Wrap Midi Skirt"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/clothes-4.jpg")}
										alt="Black Floral Wrap Midi Skirt"
										className="product-img hover"
										width="300"
									/>

									<p className="showcase-badge angle pink">new</p>

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
										skirt
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Black Floral Wrap Midi Skirt
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;25.00</p>
										<del>&#8358;35.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/shoe-2.jpg")}
										alt="Casual Men's Brown shoes"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/shoe-2_1.jpg")}
										alt="Casual Men's Brown shoes"
										className="product-img hover"
										width="300"
									/>

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
										casual
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Casual Men's Brown shoes
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;99.00</p>
										<del>&#8358;105.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/watch-3.jpg")}
										alt="Pocket Watch Leather Pouch"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/watch-4.jpg")}
										alt="Pocket Watch Leather Pouch"
										className="product-img hover"
										width="300"
									/>

									<p className="showcase-badge angle black">sale</p>

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
										watches
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Pocket Watch Leather Pouch
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;150.00</p>
										<del>&#8358;170.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/watch-1.jpg")}
										alt="Smart watche Vital Plus"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/watch-2.jpg")}
										alt="Smart watche Vital Plus"
										className="product-img hover"
										width="300"
									/>

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
										watches
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Smart watche Vital Plus
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;100.00</p>
										<del>&#8358;120.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/party-wear-1.jpg")}
										alt="Womens Party Wear Shoes"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/party-wear-2.jpg")}
										alt="Womens Party Wear Shoes"
										className="product-img hover"
										width="300"
									/>

									<p className="showcase-badge angle black">sale</p>

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
										party wear
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Womens Party Wear Shoes
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;25.00</p>
										<del>&#8358;30.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/jacket-1.jpg")}
										alt="Mens Winter Leathers Jackets"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/jacket-2.jpg")}
										alt="Mens Winter Leathers Jackets"
										className="product-img hover"
										width="300"
									/>

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
										jacket
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Mens Winter Leathers Jackets
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;32.00</p>
										<del>&#8358;45.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/sports-2.jpg")}
										alt="Trekking & Running Shoes - black"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/sports-4.jpg")}
										alt="Trekking & Running Shoes - black"
										className="product-img hover"
										width="300"
									/>

									<p className="showcase-badge angle black">sale</p>

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
										sports
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Trekking & Running Shoes - black
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;58.00</p>
										<del>&#8358;64.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/shoe-1.jpg")}
										alt="Men's Leather Formal Wear shoes"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/shoe-1_1.jpg")}
										alt="Men's Leather Formal Wear shoes"
										className="product-img hover"
										width="300"
									/>

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
										formal
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Men's Leather Formal Wear shoes
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;50.00</p>
										<del>&#8358;65.00</del>
									</div>
								</div>
							</div>

							<div className="showcase">
								<div className="showcase-banner">
									<img
										src={require("../assets/images/products/shorts-1.jpg")}
										alt="Better Basics French Terry Sweatshorts"
										className="product-img default"
										width="300"
									/>
									<img
										src={require("../assets/images/products/shorts-2.jpg")}
										alt="Better Basics French Terry Sweatshorts"
										className="product-img hover"
										width="300"
									/>

									<p className="showcase-badge angle black">sale</p>

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
										shorts
									</a>

									<h3>
										<a href="#" className="showcase-title">
											Better Basics French Terry Sweatshorts
										</a>
									</h3>

									<div className="showcase-rating">
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
										<ion-icon name="star-outline"></ion-icon>
									</div>

									<div className="price-box">
										<p className="price">&#8358;78.00</p>
										<del>&#8358;85.00</del>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
