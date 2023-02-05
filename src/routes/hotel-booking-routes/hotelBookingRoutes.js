const express = require("express");
const { showBookings, showBooking, addBooking, updateBooking, deleteBooking } = require("../../controllers/hotel-booking-controllers/hotelBookingController");
const { auth } = require("../../middlewares/auth");
    const bookingRouter = express.Router();
    bookingRouter.get("/showbookings", auth, showBookings);
    bookingRouter.get("/showbooking/:id", auth, showBooking);
    bookingRouter.post("/addbooking", addBooking);
    bookingRouter.put("/updatebooking", auth, updateBooking);
    bookingRouter.delete("/deletebooking", auth, deleteBooking);
module.exports = bookingRouter;