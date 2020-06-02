var express = require('express');
var path = require('path');
var bodyParse = require('body-parser');

var tasks = require('./routes/tasks');

var cors = require('cors');

var port = 5000;

var app = express();

app.use(
  cors({
    origin: "htt´://localhost:3000",
    credentials: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("http", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use("/api", tasks);

app.listen(port, function () {
  console.log("Server started on port " + port);
})


