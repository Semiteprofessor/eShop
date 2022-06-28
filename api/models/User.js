/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		username: { type: String, required: true },
		email: {
			type: String,
			unique: true,
			required: true,
			dropDups: true,
			index: true,
		},
		password: { type: String, required: true },
		avatar: { type: String },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
