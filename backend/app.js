// console.log("hello word !")

const express = require('express');
const app = express();
const morgan = require('morgan');



// middleware
app.use(express.json());
app.use(morgan('tiny'));

require('dotenv/config');


const api = process.env.API_URL;


// /api/v1
app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: 'hair dresses',
    image: 'some_url'
  };
  res.send(product);
});

app.post(`${api}/product`, (req, res) => {
  const product = req.body;
  console.log(product);
  res.send(product);
});


app.listen(3000, () => {
  console.log(`server is running http://localhost:3000${api}`);
});
