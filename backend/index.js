const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const verifyToken = require("../backend/api/middleware/verifyToken");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

//mongoDB Config using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@projectserventica.h06lv2i.mongodb.net/Serventica?retryWrites=true&w=majority&appName=ProjectServentica`
  )
  .then(console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

//jwt auth

// jwt related api
app.post("/jwt", async (req, res) => {
  const user = req.body;
  // console.log(user)
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1hr",
  });
  res.send({ token });
});

//import routes here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
const userRoutes = require("./api/routes/userRoutes");

app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.use("/users", userRoutes);

app.get("/", verifyToken, (req, res) => {
  res.send("Hey Serventica Hope u will shine one day!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
