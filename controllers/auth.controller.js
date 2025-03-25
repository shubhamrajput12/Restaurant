const userModel = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;
    ///validtion
    if (!username || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }
    //check user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already exists",
      });
    }

    //create new user
    const user = await userModel.create({
      username,
      email,
      password,
      phone,
      address,
    });
    return res.status(201).send({
      success: true,
      message: "Successfully registered",
    });
  } catch (error) {
    console.log("register error", error);
    return res.status(500).send({
      success: false,
      message: "Error in register api",
      error,
    });
  }
};

module.exports = { register };
