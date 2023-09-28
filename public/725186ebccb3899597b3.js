var express = require("express");
var mongoose = require("mongoose");
var app = express();
var dotenv = require("dotenv").config();
var port = process.env.PORT;
var mongoURl = 'mongodb+srv://root:root@cluster0.0w18s6p.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURl, function (error) {
  if (!error) {
    console.log("database connected");
  } else {
    console.log(error);
  }
});
app.use(express.json());
app.use(express["static"]("public"));
app.use(express.urlencoded({
  extended: false
}));
app.use("/website", require("./routes/allroutes"));
app.get("/", function (req, res) {
  res.send("Hello from server");
});
app.listen(port, function () {
  console.log("Server is running on port number: " + port);
});