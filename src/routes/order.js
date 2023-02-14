var express = require("express");
const { getAllOrders, postOrders, putOrders, delOrders } = require("../controllers/orderController");
const { auth } = require("../middlewares/auth");
const orderRouter = express.Router();

orderRouter.get("/showorders",auth, getAllOrders);
orderRouter.post("/addorders",auth, postOrders);
orderRouter.put("/putorders",auth, putOrders);
orderRouter.delete("/delorders",auth, delOrders);


module.exports = orderRouter;
