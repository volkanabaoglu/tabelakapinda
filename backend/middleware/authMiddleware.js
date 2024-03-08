import { Jwt } from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// Protect routes

export const protect = asyncHandler(async (req, res, next) => { 
    let token ;
    // Read jwt from the cookie
    token = req.cookies.jwt;
    if(!token){
        res.status(401);
        throw new Error('Not authorized, no token found');
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    try {
        req.user = await User.findById(decoded.userId).select('-password');
        next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized, token failed');
    }

})