import { Router } from "express";
import { registrarParticipante } from "../controllers/controllerPart.js";

const router = Router();

router.post("/register", registrarParticipante);

export default router