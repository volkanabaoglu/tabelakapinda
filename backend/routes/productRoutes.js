import express from "express";
import connectDB from "../config/db.js";
import env from "dotenv";
import Product from "../models/productModel.js";

env.config();
connectDB();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await Product.find();
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: "Products not found!" });
  }
});

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const response = await Product.findById(productId);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: "Product not found!" });
  }
});

export default router;
