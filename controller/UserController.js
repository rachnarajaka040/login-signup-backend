const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/rachna/character
router.post("/", async (req, res) => {
  try {
    //console.log("apifhghghh ");
    const userData = req.body;
    const newUser = await User.create(userData);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    //console.log("heelo raj");
    const name = await User.find();
    return res.status(200).send(name);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "user delete succefull" });
    console.log("delete");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT /api/rachna/character/:id
// PUT /api/rachna/character/:id
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });
    console.log("update successfully");
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
