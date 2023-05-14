import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class Cadastro {
  async cadastrar(request: Request, response: Response) {
    const { titulo, genero, ano } = request.body;

    try {
      const filme = await prismaClient.filmes.create({
        data: {
          titulo,
          genero,
          ano,
        },
      });
      return response.json(filme);
    } catch (e) {
      response.status(500).json({ error: "Filme já cadastrado!" });
    }
  }
}
export class Deletar {
  async deletar(request: Request, response: Response) {
    const { titulo } = request.params;

    try {
      const deletar = await prismaClient.filmes.delete({
        where: {
          titulo,
        },
      });
      return response
        .status(200)
        .json({ message: "Filme deletado com sucesso!" });
    } catch (e) {
      return response
        .status(400)
        .json({
          message: "O filme que você está tentando deletar não foi cadastrado",
        });
    }
  }
}
