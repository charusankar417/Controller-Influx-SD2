const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  register,
  login,
  profile,
  display,
  firstTimeQ,
} = require("../Controllers/authController.js");

router.use(
  cors({
    credentials: true,
    origin:
      "http://localhost:3002" ||
      "http://localhost:3000" ||
      "http://localhost:3001",
  })
);

router.get("/", test);
router.post("/register", register);
router.post("/login", login);
router.get("/profile", profile);
router.get("/member/details", display);
router.get("/one-time-signup-server", firstTimeQ);
module.exports = router;
