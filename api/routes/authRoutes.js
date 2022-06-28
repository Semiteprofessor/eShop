/** @format */

const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");

// REGISTER routes
router.post(
	"/register",
	check("name", "Name is required").notEmpty(),
	check("email", "Please include a valid email").isEmail(),
	check(
		"password",
		"Please enter a password with 6 or more characters",
	).isLength({ min: 6 }),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const avatar = gravatar.url(req.body.email, {
			s: "200", // Sized
			r: "pg", // Rating
			d: "mm", //Default
		});
		const newUser = new User({
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			isAdmin: req.body.isAdmin,
			avatar,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				process.env.SECRET_KEY,
			).toString(),
		});
		const alreadyExist = await User.findOne({ email: req.body.email });

		if (alreadyExist) {
			res.status(403).json({ email: "User already exist" });
		}

		try {
			const user = await newUser.save();

			res.status(200).json({
				status: "error",
				message: "User registration success",
				user,
			});
		} catch (error) {
			res.status(500).json({
				status: "error",
				message: "User registration failed",
			});
		}
	},
);

// REGISTER admin
router.post(
	"/createadmin",
	check("name", "Name is required").notEmpty(),
	check("email", "Please include a valid email").isEmail(),
	check(
		"password",
		"Please enter a password with 6 or more characters",
	).isLength({ min: 6 }),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const avatar = gravatar.url(req.body.email, {
			s: "200", // Sized
			r: "pg", // Rating
			d: "mm", //Default
		});
		const newUser = new User({
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			isAdmin: req.body.isAdmin,
			avatar,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				process.env.SECRET_KEY,
			).toString(),
		});
		const alreadyExist = await User.findOne({ email: req.body.email });

		if (alreadyExist) {
			res.status(403).json({ email: "User already exist" });
		}

		try {
			const user = await newUser.save();

			res.status(200).json({
				status: "error",
				message: "User registration success",
				user,
			});
		} catch (error) {
			res.status(500).json({
				status: "error",
				message: "User registration failed",
			});
		}
	},
);

// LOGIN routes
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({
			email: req.body.email,
		});

		if (!user) {
			res.status(400).json({
				status: "error",
				message: "invalid username or password",
			});
		}

		const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
		const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

		originalPassword !== req.body.password &&
			res.status(400).json({
				status: "error",
				message: "Invalid credentials",
			});
		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.SECRET_KEY,
			{ expiresIn: "48h" },
		);
		const { password, ...info } = user._doc;
		res.status(200).json({
			status: "success",
			message: "Login successful",
			...info,
			accessToken,
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
		});
	}
});

module.exports = router;
