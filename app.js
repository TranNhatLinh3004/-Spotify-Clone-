var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
var songRoute = require("./routes/songRoute");
var albumRoute = require("./routes/albumRoute");

const connectDB = require("./config/mongodb");
const { connectCloudinary } = require("./config/cloudinary");
var app = express();
const port = process.env.PORT || 3001;

app.use(cors());
connectDB();
connectCloudinary();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/song", songRoute);
app.use("/api/album", albumRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, async () => {
  console.log("Server listening on port " + port);
});

module.exports = app;
