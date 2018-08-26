const express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

const toDoRoutes = require("./routes/todos");

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.use("/api/todos", toDoRoutes);

app.listen(port, function() {
  console.log("started on: " + port);
});
