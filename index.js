const express = require("express");
const app = express();
const router = require("./src/routes/user");
require("dotenv").config();
    app.use(express.json());
    app.use("/api/user", router);
    const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}...`)
})