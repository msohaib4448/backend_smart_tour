const app = require ('./expressApp');
const bookingRouter = require('../routes/hotel-booking-routes/hotelBookingRoutes');
const hotelRouter = require('../routes/hotel-routes/hotelRoutes');
const roomRouter = require('../routes/room-routes/roomRoutes');

app.use('/hotel/', bookingRouter);
app.use('/hotel/', hotelRouter);
app.use('/hotel/', roomRouter);

// app.use('/api/admin/', adminRoutes);

module.exports = app;
