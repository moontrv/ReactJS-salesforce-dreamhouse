const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/api/property", (req, res) => {
  axios
    .get("https://dhprod-201911.herokuapp.com/property")
    .then(response => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/api/property/:id", (req, res) => {
  var id = req.params.id;
  axios
    .get("https://dhprod-201911.herokuapp.com/property/"+id)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
