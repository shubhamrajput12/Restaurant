const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route

app.get("/", (req, res) => {
  return res.status(200).send("welcome to food service app");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server is Running");
});
