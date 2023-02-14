var express = require("express");
const { auth } = require("../middlewares/auth");
const { postPaymentDetails } = require('../controllers/paymentControl')
const paymentverificationRouter = express.Router();

paymentverificationRouter.post("/verifypayment", postPaymentDetails)

module.exports = paymentverificationRouter