import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class Listagem {
    async listar(request: Request, response: Response) {

        return response.json();
    }
}