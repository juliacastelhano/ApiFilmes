import {Router} from "express";
import { FilmeController } from "../controllers/filme.controller";


const router: Router = Router();

router.get("/", new FilmeController().listar);
router.get("/:titulo", new FilmeController().buscar);
router.post("/", new FilmeController().cadastrar);

export {router};