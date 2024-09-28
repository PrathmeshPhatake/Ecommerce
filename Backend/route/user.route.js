import express from "express";
import { login, signup } from "../controler/user.controler.js";

const router = express.Router();

// Define the signup route
router.post("/signup", signup);
router.get('/login',login);

export default router;
