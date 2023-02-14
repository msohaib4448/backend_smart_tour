var express = require("express");
const { alluser } = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
const userRouter = express.Router();
    userRouter.get("/alluser",auth, alluser);
module.exports = userRouter;