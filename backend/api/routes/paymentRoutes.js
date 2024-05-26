const express = require("express");
const Payment = require("../models/Payment");
const Cart = require("../models/Carts");
const mongoose = require("mongoose");
const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;

// token
const verifyToken = require("../middleware/verifyToken");

router.post("/", async (req, res) => {
  const payment = req.body;

  try {
    // Create a new payment using Mongoose model
    const paymentRequest = await Payment.create(payment);

    // Delete items from the cart after payment
    const cartIds = payment.cartItems.map((id) => new ObjectId(id));

    const deleteCartRequest = await Cart.deleteMany({ _id: { $in: cartIds } });

    res.status(200).json({ paymentRequest, deleteCartRequest });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/", verifyToken, async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  try {
    const decodedEmail = req.decoded.email;
    if (email !== decodedEmail) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const result = await Payment.find(query).sort({ createdAt: -1 }).exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
