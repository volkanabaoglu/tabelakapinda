import express from "express";
import connectDB from "../config/db.js";
import env from "dotenv";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
env.config();
connectDB();
const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
