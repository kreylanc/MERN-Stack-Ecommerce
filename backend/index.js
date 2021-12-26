const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

//get the list of all products
app.get("/api/products", (req, res) => {
  //will convert the data even if it is not a JSON object to JSON
  res.json(products);
});

//get the specific product detail
app.get("/api/products/:id", (req, res) => {
  //checks if the requested id matches with the id from the product list
  const product = products.find((p) => p._id === req.params.id);
  //pass the single product
  res.json(product);
});

app.listen(5000, console.log("Listening on port 5000"));
