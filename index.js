const express = require("express");
require("dotenv").config();
const app = express();
var cors = require('cors')
const orderRouter = require("./src/routes/order");
const paymentRouter = require('./src/routes/payment')
const userRouter = require("./src/routes/user");
const customerRouter = require("./src/routes/customers")
const paymentverificationRouter= require('./src/routes/verificationpayment')
const stripeRouter = require("./src/routes/stripe");
//const pool = require('./src/connection/postgresql')


app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  
app.use(express.json());
app.use("/api/user", paymentRouter);
app.use("/api/users", paymentverificationRouter)
app.use("/api/user", userRouter);
app.use('/api/orders', orderRouter)
app.use('/api/customers', customerRouter)
app.use('/api/stripe', stripeRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}...`)
})