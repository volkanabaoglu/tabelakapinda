import express from "express";
import dotenv from 'dotenv'
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import {errorHandler , notFound} from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

connectDB();

const port = process.env.PORT || 5000;
const app = express();

// body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// cookie parser middleware

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
