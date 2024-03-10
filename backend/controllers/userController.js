import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

/**
 * @desc Auth user & get token
 * @route POST /api/users/login
 * @access Public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password !");
  }
});

/**
 * @desc Register
 * @route POST /api/users
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exist !");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid user data");
  }
  generateToken(res, user._id);
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

/**
 * @desc Logout user / clear cookie
 * @route POST /api/users/logout
 * @access Private
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successful" });
});

/**
 * @desc Get user profile
 * @route GET /api/users/profile
 * @access Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if(!user){
    res.status(404);
    throw new Error ('User not found');
  }

  res.status(200).json({
    _id : user._id,
    name : user.name,
    email : user.email,
    isAdmin : user.isAdmin
  })

});

/**
 * @desc Update user profile
 * @route PUT /api/users/profile
 * @access Private
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  try {
    if (!user) {
      res.status(422);
      throw new Error("User not found");
    }
    if (user.id !== req.user.id && !req.user.isAdmin) {
      return res
        .status(403)
        .json({ error: "You do not have permission to view this profile" });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id : updatedUser._id,
      name : updatedUser.name,
      email : updatedUser.email,
      password : updatedUser.password
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @desc Get users
 * @route GET /api/users
 * @access Private/Admin
 */
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

/**
 * @desc Get user by id
 * @route GET /api/users/:id
 * @access Private/Admin
 */
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user");
});

/**
 * @desc Delete users
 * @route DELETE /api/users/:id
 * @access Private/Admin
 */
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

/**
 * @desc Update users
 * @route PUT /api/users/:id
 * @access Private/Admin
 */
const updateUser = asyncHandler(async (req, res) => {
  res.send("update users");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
