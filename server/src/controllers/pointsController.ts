import { Request, Response } from "express";
import { User } from "../models/User";

export const addPoints = async (req: Request, res: Response) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (user) {
    user.points = 10;
    await user.save();
    res.send({ points: user.points });
  } else {
    res.status(404).send({ message: "User not found" });
  }
};

export const deductPoints = async (req: Request, res: Response) => {
  const userId = req.userId;
  const { points } = req.body;
  const user = await User.findById(userId);
  if (user && user.points >= points) {
    user.points -= points;
    await user.save();
    res.send({ points: user.points });
  } else {
    res.status(400).send({ message: "Insufficient points" });
  }
};
