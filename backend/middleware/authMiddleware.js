import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// Protect routes

const protect = asyncHandler(async (req, res, next) => {
  let token;
  // Read jwt from the cookie
  token = req.cookies.jwt;
  if (!token) {
    console.log("No token found");
    res.status(401);
    throw new Error("Not authorized, no token found");
  }
  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  try {
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

// Admin middleware

const admin = asyncHandler(async (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
  next();
});

export { protect, admin };
