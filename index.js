const express = require("express");
const app = express();
const userRouter = require("./src/routes/user-routes");



require('dotenv').config();

app.use(express.json());
app.use("/api/users", userRouter);  




const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}...`)
})