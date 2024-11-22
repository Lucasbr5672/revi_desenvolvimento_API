import { Router } from "express";
import {registrarPalestrante, listarPalestrantes} from "../controllers/controllerPales.js"

const router = Router();

router.post("/palestrantes", registrarPalestrante);
router.get("/palestrantes", listarPalestrantes);

export default router