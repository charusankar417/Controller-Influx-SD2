const express = require("express");
const router = express.Router();
const cors = require('cors');
const {test, register} = require("../Controllers/authController.js")


router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }
  )
)

router.get('/', test);
router.post('/register', register)

module.exports = router;
/*
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AdminModel } = require("../Models/AdminSchema");



router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // requests to DB must be await async notation
  const user = await AdminModel.find({ username: username }, (error, data) => {
    if (error) {
      console.log(error);
      res.json("Error");
    } else {
      console.log(error);
      res.json("Success");
    }
  });
});


router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // requests to DB must be await async notation
  const user = await AdminModel.findOne({ username });

  res.json(user);
});

module.exports = {
  admin: router,
};
*/