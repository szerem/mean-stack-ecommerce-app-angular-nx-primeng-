// console.log("hello word !")

const express = require("express");
const app = express();
require("dotenv/config");
const api = process.env.API_URL;

// /api/v1
app.get(api+"/products", (req, res) => {
  res.send("hello from API");
});

app.listen(3000, () => {
  console.log(api);
  console.log(`server is running http://localhost:3000${api}`);
});
