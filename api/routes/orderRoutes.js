/** @format */

const router = require("express").Router();
const Order = require("../models/Order");
const verify = require("../verify-token");

router.get("/", verify, async (req, res) => {
	try {
		const orders = await Order.find({}).populate("user");
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/mine", verify, async (req, res) => {
	try {
		const orders = await Order.find({ user: req.user._id });
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/:id", verify, async (req, res) => {
	try {
		const order = await Order.find(req.params.id);
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json(error);
	}
});

// DELETE order
router.delete("/:id", verify, async (req, res) => {
	if (req.body.isAdmin) {
		try {
			await Order.findByIdAndDelete(req.params.id);

			res.status(200).json({
				status: "success",
				message: "Order deleted successfully",
			});
		} catch (error) {
			res.status(500).json({
				status: "error",
				message: "Order delete failed",
			});
		}
	} else {
		res.status(403).json({
			status: "error",
			message: "You are not allowed to delete order",
		});
	}
});

// CREATE order
router.post("/create", verify, async (req, res) => {
	const newOrder = new Order({
		orderItems: req.body.orderItems,
		user: req.user._id,
		shipping: req.body.shipping,
		payment: req.body.payment,
		itemsPrice: req.body.itemsPrice,
		taxPrice: req.body.taxPrice,
		shippingPrice: req.body.shippingPrice,
		totalPrice: req.body.totalPrice,
	});
	try {
		const saveOrder = await newOrder.save();
		res.status(200).json({
			status: "success",
			message: "Order created successfully",
			saveOrder,
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: "creating Order not successful",
		});
	}
});

// UPDATE order
router.put("/:id/pay", verify, async (req, res) => {
	const order = Order.findByIdAndUpdate(req.params.id);
	if (order) {
		order.isPaid = true;
		order.paidAt = Date.now();
		order.payment = {
			paymentMethod: "flutterwave",
			paymentResult: {
				payerID: req.body.payerID,
				orderID: req.body.orderID,
				paymentID: req.body.paymentID,
			},
		};
		try {
			const updateOrder = await order.save();
			res.status(200).json({
				status: "success",
				message: "Order updated successfully",
				updateOrder,
			});
		} catch (error) {
			res.status(500).json({
				status: "error",
				message: "Order update failed",
				error,
			});
		}
	} else {
		res.status(403).json({
			status: "error",
			message: "Order not found",
		});
	}
});
module.exports = router;
