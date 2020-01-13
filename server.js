const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port,() => console.log("I am running at: " + port));

app.get('/', function (req, res) {
  res.send('Hello World!');
})