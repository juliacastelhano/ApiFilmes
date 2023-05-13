import { Router } from "express";
import { Cadastro } from "../controllers/cadastroController";
// import { Busca } from "../controllers/buscaController";
// import { Listagem } from "../controllers/listagemController";

const router: Router = Router();

const cadastro = new Cadastro();

router.post("/filme", cadastro.cadastrar);
// router.post("/");
// router.post("/");


export {router};