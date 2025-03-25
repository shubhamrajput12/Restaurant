const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const authRoutes = require("./routes/auth.routes");

// dotenv config
dotenv.config();

//connect db
connectDb();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("welcome to food service app");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server is Running");
});
