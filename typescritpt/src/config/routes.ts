import { Router } from "express";
import { Cadastro } from "../controllers/cadastroController";
import { Busca } from "../controllers/buscaController";
import { Listagem } from "../controllers/listagemController";
import { Deletar } from "../controllers/cadastroController";
import { AdicionarFavoritos } from "../controllers/adicionarFavController";
// import { DeletarFav } from "../controllers/adicionarFavController";

const router: Router = Router();

const cadastro = new Cadastro();
const buscarFilme = new Busca();
const listagem = new Listagem();
const deletar = new Deletar();
const favoritos = new AdicionarFavoritos();
// const deletarFav = new DeletarFav();

router.post("/filme", cadastro.cadastrar);
router.get("/:titulo", buscarFilme.buscar);
router.get("/", listagem.listar);
router.delete("/:titulo", deletar.deletar);
router.post("/favoritos/:filmesId", favoritos.adicionarFav);
// router.delete("/:id/:titulo", deletarFav.deletar);

export { router };
