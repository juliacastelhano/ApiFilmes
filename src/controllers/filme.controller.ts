import {Request, Response} from "express";
import {Filme} from "../models/filme.model";

let filmes: Filme[] = []; 

export class FilmeController {
    listar(request: Request, response: Response): Response {
        return response.status(200).json({message: "Listando:", info: filmes});
    }

    buscar(request: Request, response: Response): Response {
        const {titulo} = request.params;

        for(let filmeCadastrado of filmes) {
            if(filmeCadastrado.titulo == titulo) {
                return response.status(200).json({message: "Filme encontrado!", info: filmeCadastrado});
            }
        }
        return response.status(404).json({message: "Filme não encontrado =("});
    }

    cadastrar(request: Request, response: Response): Response {
        let filme: Filme = new Filme();

        filme.titulo = request.body.titulo;
        filme.genero = request.body.genero;
        filme.ano = request.body.ano;

        filmes.push(filme);

        return response.status(201).json({message: "Filme cadastrado com sucesso!", info: filme});
    }
}