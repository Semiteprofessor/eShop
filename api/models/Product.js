/** @format */

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
	{
		name: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		rating: { type: Number, default: 0 },
		comment: { type: String },
	},
	{ timestamps: true },
);

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			index: true,
			unique: true,
			sparse: true,
		},
		imageUrl1: { type: String, required: true },
		imageUrl2: { type: String, required: true },
		size: { type: String, required: true },
		price: { type: Number, required: true },
		initPrice: { type: Number },
		color: { type: String, required: true },
		category: { type: String, required: true },
		brand: { type: String, required: true },
		countInStock: { type: Number, required: true },
		description: { type: String, required: true },
		review: [reviewSchema],
		numReviews: { type: Number, required: true },
		rating: { type: Number, required: true },
		showcase: { type: String },
		sold: { type: Number },
	},
	{ timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
