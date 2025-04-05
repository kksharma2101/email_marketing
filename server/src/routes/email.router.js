import express from "express";
import { sendSchedualEmail } from "../controllers/emailController.js";

const router = express.Router();

router.post("/schedule-email", sendSchedualEmail);

export default router;
