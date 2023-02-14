var express = require("express");
const { auth } = require("../middlewares/auth");
const { checkoutSession, handleWebhook } = require("../../src/controllers/stripeController")
const stripeRouter = express.Router();


stripeRouter.post("/checkoutsession", auth, checkoutSession);
stripeRouter.post("/webhook", auth, handleWebhook);

module.exports = stripeRouter;