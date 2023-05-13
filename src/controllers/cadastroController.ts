import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export class Cadastro {

  async cadastrar(request: Request, response: Response)  {

    const { titulo, genero, ano } = request.body;


    const filme = await prismaClient.filmes.create({
      data: {
        titulo,
        genero,
        ano
      }
    })
    return response.json(filme);
  }


}
