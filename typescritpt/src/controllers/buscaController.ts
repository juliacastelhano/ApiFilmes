import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class Busca {
    async buscar(request: Request, response: Response) {

    const { titulo } = request.params;

    const buscarFilme = await prismaClient.filmes.findUnique({
      where: {
        titulo,
      }
    });

    if (!buscarFilme) {
      return response.status(404).json({ message: "Filme não encontrado" });
    }

    return response.json(buscarFilme);
  }
}
