/** @format */

require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async (req, res, next) => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB connection success 👌 ");
	} catch (error) {
		console.log("MongoDB connection failed ⚠️", error);
		process.exit(1);
	}
};

module.exports = connectDB;