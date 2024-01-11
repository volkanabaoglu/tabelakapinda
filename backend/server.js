import express from "express";
import products from "./data/products.js";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.json(product);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
