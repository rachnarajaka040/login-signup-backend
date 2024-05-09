const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phoneNumber: String,
  companyName: String,
  image: String // Assuming the image will be stored as a URL or file path
});

module.exports = mongoose.model("User", userSchema);
