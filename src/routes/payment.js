var express = require("express");
const { auth } = require("../middlewares/auth");
const {addPayment, showPayments, editPayment, deletePayment , postPaymentDetails} = require('../controllers/paymentControl')
const paymentRouter = express.Router();

    paymentRouter.get("/showpayments",auth, showPayments);
    paymentRouter.post("/addpayment",auth, addPayment);
    paymentRouter.put("/editpayment",auth, editPayment);
    paymentRouter.delete("/deletepayment",auth, deletePayment);
    paymentRouter.post("/verifypayment", postPaymentDetails);


module.exports = paymentRouter;
