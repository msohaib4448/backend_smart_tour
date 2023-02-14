const express = require("express");
const { showHotels, showHotel, addHotel, updateHotel, deleteHotel } = require("../../controllers/hotel-controllers/hotelControllers.js");
const { auth } = require("../../middlewares/auth");
const hotelRouter = express.Router();
    hotelRouter.get("/showhotels", auth, showHotels);
    hotelRouter.get("/showhotel/:id", auth, showHotel);
    hotelRouter.post("/addhotel", auth, addHotel);
    hotelRouter.put("/updatehotel", auth, updateHotel);
    hotelRouter.delete("/deletehotel/:id",  deleteHotel);
module.exports = hotelRouter;