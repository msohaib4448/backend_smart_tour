const express = require("express");
const userRouter = require("./src/routes/user.js");
const hotelRouter = require("./src/routes/hotel-routes/hotelRoutes.js");
const roomRouter = require("./src/routes/room-routes/roomRoutes.js")
const bookingRouter = require("./src/routes/hotel-booking-routes/hotelBookingRoutes")
    const app = express();
    require("dotenv").config();
    app.use(express.json());
        app.use("/hotel", hotelRouter);
        app.use("/hotel", roomRouter);
        app.use("/hotel", bookingRouter);
        app.use("/hotel", userRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}...`)
})