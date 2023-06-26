import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class AdicionarFavoritos {
  async adicionarFav(request: Request, response: Response) {
    const { titulo } = request.body;
    const { filmesId } = request.params;
    try {
      const favoritos = await prismaClient.favoritos.create({
        data: {
          titulo,
          Filmes: {
            connect: {
              id: parseInt(filmesId),
            },
          },
        },
      });
      console.log(favoritos);
      return response.json(favoritos);
    } catch (e) {
      response.status(500).json({ error: "Filme já adicionado!" });
      console.log("erro");
    }
  }

  async removerDosFavoritos(request: Request, response: Response) {
    const { filmeId } = request.params;

    try {
      await prismaClient.favoritos.delete({
        where: {
          id: parseInt(filmeId),
        },
      });

      return response.sendStatus(204);
    } catch (e) {
      response.status(500).json({ error: "Erro ao remover dos favoritos!" });
    }
  }

  async listarFavoritos(request: Request, response: Response) {
    try {
      const favoritos = await prismaClient.favoritos.findMany({
        include: {
          Filmes: true,
        },
      });

      return response.json(favoritos);
    } catch (e) {
      response.status(500).json({ error: "Erro ao listar favoritos!" });
    }
  }
}



