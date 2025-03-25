const mongoose = require("mongoose");
const color = require("colors");

// function to connect database connection

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db".bgCyan);
  } catch (error) {
    console.log("Db Error",error);
  }
};

module.exports = connectDb;