const config = require  ('./config/config');
const app = require ('./server/expressApp');

require('./server/routes');

const server = require('http').Server(app);

server.listen(`${config.port}`, () => {
    console.log(`Server now listening at localhost:${config.port}`);

})

// const express = require("express");
// const app = express();
// const userRouter = require("./src/routes/user-routes");



// require('dotenv').config();

// app.use(express.json());
// app.use("/api/users", userRouter);  




