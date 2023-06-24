import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { Filmes } from "@prisma/client";

export class Listagem {
    async listar(request: Request, response: Response) {

        const filme: Filmes[] = await prismaClient.filmes.findMany();

        return response.json(filme);
    }
}