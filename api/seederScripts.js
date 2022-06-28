/** @format */

require("dotenv").config();

const connectDB = require("./config/db");

const productsData = require("./data/products");

const Product = require("./models/Product");

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});

		await Product.insertMany(productsData);

		console.log("Data import success 🆗");
	} catch (error) {
		console.log("Data import failed ⚠️", error);
		process.exit(1);
	}
};

importData();
