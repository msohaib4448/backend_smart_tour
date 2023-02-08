const express = require("express");
const { showHotels, showHotel, addHotel, updateHotel, deleteHotel } = require("../../controllers/hotel-controllers/hotelControllers.js");
const {Auth} = require('../../middleware/auth')
const hotelRouter = express.Router();
    hotelRouter.get("/showhotels",  showHotels);
    hotelRouter.get("/showhotel/:id",  showHotel);
    hotelRouter.post("/addhotel",Auth,  addHotel);
    hotelRouter.put("/updatehotel",  updateHotel);
    hotelRouter.delete("/deletehotel",  deleteHotel);
module.exports = hotelRouter;