/** @format */

const router = require("express").Router();
const Product = require("../models/Product");
const verify = require("../verify-token");

// GET all products
router.get("/", async (req, res) => {
	try {
		const products = await Product.find({});
		const totalProducts = await Product.count();

		res.status(200).json({
			status: "success",
			message: "Product list success",
			totalProducts,
			products,
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: "Product list failed",
		});
	}
});

// GET product by ID
router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findOne(req.params.id);
		res.status(200).json({
			status: "success",
			message: "Fetching product info successful",
			product,
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: "Fetching product info failed",
		});
	}
});

// ADD product
router.post("/create", verify, async (req, res) => {
	// if (req.user.isAdmin) {
	const newProduct = new Product(req.body);

	try {
		const saveProduct = await newProduct.save();
		res.status(200).json({
			status: "success",
			message: "Product saved successfully",
			saveProduct,
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: "Creating product not successful",
			error,
		});
	}
	// } else {
	// 	res.status(403).json({
	// 		status: "error",
	// 		message: "You are not allowed to creat product",
	// 	});
	// }
});

// UPDATE product
router.put("/:id", verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const product = await Product.findByIdAndUpdate(req.params.id);
			res.status(200).json({
				status: "success",
				message: "Product updated successfully",
				product,
			});
		} catch (error) {
			res.status(500).json({
				status: "error",
				message: "Product update failed",
				error,
			});
		}
	} else {
		res.status(403).json({
			status: "error",
			message: "You are not allowed to update this product",
		});
	}
});

// DELETE product
router.delete("/:id", async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Product.findByIdAndDelete(req.params.id);

			res.status(200).json({
				status: "success",
				message: "Product deleted successfully",
			});
		} catch (error) {
			res.status(500).json({
				status: "error",
				message: "Product delete failed",
			});
		}
	} else {
		res.status(403).json({
			status: "error",
			message: "You are not allowed to delete product",
		});
	}
});

module.exports = router;
