const express = require("express");

const { createUser, getUser, updateUser, deleteUser } = require("../controllers/user-Controller");
const { Auth } = require("../middlewares/auth");
const router = express.Router();



router.get("/",Auth, getUser);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",Auth,deleteUser);
 


module.exports = router;