const express = require("express")
const { registerUser } = require("../controllers/user.controllers")
const router = express.Router()
router.route("/").post(registerUser)
// router.post("/login", auth)

module.exports = router