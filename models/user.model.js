const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default: "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
