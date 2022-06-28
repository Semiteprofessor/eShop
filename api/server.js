/** @format */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const PORT = 4000 || process.env.PORT;

connectDB();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Express midddleware
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/uploads", uploadRoutes);
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
	res.json({ message: "API running..." });
});
app.get("/", (req, res) => {
	res.sendFile("/");
});

app.get("/", (req, res) => res.send("Hello World!"));

// Global error handler
app.use((err, req, res, next) => {
	console.log(err.stack);
	console.log(err.name);
	console.log(err.code);

	res.status(500).json({
		message: "Something went wrong",
	});
});

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
