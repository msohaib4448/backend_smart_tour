var express = require("express");
const { alluser } = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
const router = express.Router();
    router.get("/alluser",auth, alluser);
module.exports = router;