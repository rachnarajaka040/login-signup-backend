const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phoneNumber: String,
  companyName: String,
});

module.exports = mongoose.model("User", userSchema);
