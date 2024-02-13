const User = require("../Models/AdminSchema");
const User1 = require("../Models/user-model");
const { hashPwd, comparePwd } = require("../helpers/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv");
const cookies = require("cookies");
const test = (req, res) => {
  res.json("test is working");
};

require("dotenv").config();

const firstTimeQ = async (req, res) => {
  try {
    console.log(req);
    console.log(req.query);
    // rename req.body information sent by user
    const { name, major, gradDate } = req.query;
    // three if statements check if form fields are entered
    // toast picks up error body and displays as notification
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!major) {
      return res.json({
        error: "major is required",
      });
    }
    if (!gradDate) {
      return res.json({
        error: "Grad Date Required",
      });
    }

    const exist = await User1.findOne({ name });
    if (exist) {
      return res.json({
        error: "User (Name) Exists",
      });
    }

    // create a hashed password using hashPwd helper function
    // const hashedPwd = await hashPwd(password);
    //console.log("Addded");
    // create user with req.body infromation
    const user = User1.create({
      name,
      major,
      gradDate,
    });

    if (User1.find()) {
      console.log("Addded");
    }

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
// Register Endpoint; endpoint connected to route in LoginOut.js
const register = async (req, res) => {
  try {
    // rename req.body information sent by user
    const { email, username, password } = req.body;
    // three if statements check if form fields are entered
    // toast picks up error body and displays as notification
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    if (!username) {
      return res.json({
        error: "username is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "pwd is required and should be greater than 6 letters",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email Exists",
      });
    }

    // create a hashed password using hashPwd helper function
    const hashedPwd = await hashPwd(password);

    // create user with req.body infromation
    const user = User.create({
      email,
      username,
      password: hashedPwd,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
// Login Endpoint;endpoint connected to route in LoginOut.js
const login = async (req, res) => {
  try {
    // take the username user logs in with and store in const username
    const { username, password } = req.body;
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // If user exists, then check passwords match
    const match = await comparePwd(password, user.password);
    console.log(match);

    if (match) {
      jwt.sign(
        { username: user.username, id: user._id, email: user.email },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }
          res
            .cookie("token", token)
            .json(user)
            .status(200);
          res.json("Password Match");
        }
      );
    } else {
      return res.json({
        error: "Incorrect Password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const profile = (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) {
        throw err;
      }
      console.log("here");
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const display = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
const authenticate = async (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("token", token);
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.clearCookie("access_token");
    // token = req.cookies.access_token;
    if (!token) {
      console.log("here");
      res.redirect(301, "http://localhost:3000/");
    }
  }
};
module.exports = {
  test,
  register,
  login,
  profile,
  display,
  firstTimeQ,
  authenticate,
};
