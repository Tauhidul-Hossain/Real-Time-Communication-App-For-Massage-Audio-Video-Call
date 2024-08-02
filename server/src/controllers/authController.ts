// src/controllers/authController.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const secret = "your_secret_key";

export const signUp = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).send({ message: "User created" });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });
    res.send({ token });
  } else {
    res.status(401).send({ message: "Invalid credentials" });
  }
};
