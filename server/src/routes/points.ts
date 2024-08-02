import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware";
import { addPoints, deductPoints } from "../controllers/pointsController";

const router = Router();

router.post("/add", verifyToken, addPoints);
router.post("/deduct", verifyToken, deductPoints);

export default router;
