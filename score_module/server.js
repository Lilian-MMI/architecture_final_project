const express = require("express");

// Constants
const PORT = 8082;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World From Score");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

const axios = require("axios");

axios
  .get("http://172.20.0.3:8081")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });
