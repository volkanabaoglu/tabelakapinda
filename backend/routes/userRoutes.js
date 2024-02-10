import express from "express";
import connectDB from "../config/db.js";
import env from "dotenv";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

env.config();
connectDB();
const router = express.Router();

router.route("/")
.post(registerUser)
.get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile")
.get(getUserProfile)
.put(updateUserProfile);
router.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

export default router;
