import { Router } from "express";
import { criar, deletarEven, editarEven, getEven} from "../controllers/controllerEven.js";

const router = Router();

router.get("/listar", getEven)
router.post("/criar", criar);
router.put("/editar/:id", editarEven)
router.delete("/cancela/:id", deletarEven)

export default router