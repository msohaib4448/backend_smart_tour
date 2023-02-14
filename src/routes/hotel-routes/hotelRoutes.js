const express = require("express");
const { showHotels, showHotel, addHotel, updateHotel, deleteHotel } = require("../../controllers/hotel-controllers/hotelControllers.js");
const { Auth } = require('../../middleware/auth')
const hotelRouter = express.Router();
hotelRouter.get("/showhotels",  showHotels);
hotelRouter.get("/showhotel/:id",  showHotel);
hotelRouter.post("/addhotel", Auth, addHotel);
hotelRouter.put("/updatehotel", Auth, updateHotel);
hotelRouter.delete("/deletehotel/:id", Auth, deleteHotel);
module.exports = hotelRouter;