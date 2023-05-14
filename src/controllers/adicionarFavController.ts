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
    }
  }
}

// export class DeletarFav {
//   async deletar(request: Request, response: Response) {
//     const { id, titulo } = request.params;

//     try {
//       const deletar = await prismaClient.favoritos.delete({
//         where: {
//           id: parseInt(id),
//           titulo,
//         },
//       });
//       return response
//         .status(200)
//         .json({ message: "Filme deletado com sucesso!!!" });
//     } catch (e) {
//       return response
//         .status(400)
//         .json({
//           message: "O filme que você está tentando deletar não foi cadastrado",
//         });
//     }
//   }
// }
