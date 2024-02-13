const mongoose = require("mongoose");
const User1 = new mongoose.Schema(
  {
    name: String,
    major: String,
    gradDate: String,
  },
  {
    collection: "members",
  }
);

// collection specifies where the schema is inserted
// bu default uses users collection in Mongo
// Specified to main collection inside of the iNflux-main DB

const usermodel = mongoose.model("User1", User1);
module.exports = usermodel;
