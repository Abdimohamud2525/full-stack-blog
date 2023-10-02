import express from "express";
import {
  LoginUser,
  Logout,
  getUserProfile,
  registerUser,
} from "../controlis/userConrollers.js";
import {
  validateUserLogin,
  validateUserRegistration,
} from "../validatord/userValidator.js";
import { authenticate } from "../middware/outmiddleware.js";

const userRouter = express.Router();

userRouter.post("/register-user", validateUserRegistration, registerUser);
userRouter.post("/login-user", validateUserLogin, LoginUser);
userRouter.get("/get-user-profile", authenticate, getUserProfile);
userRouter.post("/logout", Logout);

export default userRouter;
