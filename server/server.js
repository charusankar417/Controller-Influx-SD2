require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
const url = require("url");
const { error } = require("console");
// const port = process.env.PORT || 3001;
//const router = express.Router();
const { admin } = require("./Routes/LoginOut");

const app = express();
app.use(express.json());
app.use(cors());

/*
app.use("/auth", router);
try {
  const db = mongoose.connect("mongodb://localhost:27017/Controller1");
  console.log("Connected");
} catch (error) {
  handleError(error);
}

app.listen(4001, () => console.log("Server is Running"));
*/

app.use("/auth", admin);

app.listen(4001, function(err) {
  if (err) console.log(err);
  console.log("Server listening on PORT");
});
