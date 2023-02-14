const express=require("express")
const route=express.Router();
const middleware=require('../middlewares/auth')
const controller=require("../controllers/paymentControl");
const stripeController = require("../controllers/stripeController")

route.get("/", auth, controller)
route.get("/", auth, stripeController)

module.exports=route