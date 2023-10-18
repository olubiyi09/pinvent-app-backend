const express = require("express");
const { registerUser, resetPassword } = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");
const { logout } = require("../controllers/userController");
const { getUser } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const { loginStatus } = require("../controllers/userController");
const { updateUser } = require("../controllers/userController");
const { changePassword } = require("../controllers/userController");
const { forgotPassword } = require("../controllers/userController");
const router = express.Router()


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", logout)
router.get("/getuser", protect, getUser)
router.get("/loggedinstatus", loginStatus)
router.patch("/updateuser", protect, updateUser)
router.patch("/changepassword", protect, changePassword)
router.post("/forgotpassword", forgotPassword)
router.put("/resetpassword/:resetToken", resetPassword)

module.exports = router