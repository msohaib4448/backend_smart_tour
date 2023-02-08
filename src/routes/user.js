const express = require("express");
const { showUsers } = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
    const userRouter = express.Router();
    userRouter.get("/showusers", auth, showUsers);
module.exports = userRouter;
