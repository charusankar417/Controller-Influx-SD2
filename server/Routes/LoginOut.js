const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AdminModel } = require("../Models/AdminSchema");

const router = express.Router();

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

/*
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // requests to DB must be await async notation
  const user = await AdminModel.findOne({ username });

  res.json(user);
});
*/
module.exports = {
  admin: router,
};
