const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phoneNumber: String,
  companyName: String,
  image: String // Assuming the image will be stored as a URL or file path
});



userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(), // Corrected typo here
        email: this.email,
      },
      process.env.JWT_SECRET_KEY, // Corrected spelling here
      {
        expiresIn: "38d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("User", userSchema);
