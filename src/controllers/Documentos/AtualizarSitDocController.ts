import { Request, Response } from "express";
import { AtualizarSitDocService } from "../../services/Documentos/AtualizarSitDocService";


class AtualizarSitDocController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { situacao } = request.body;

    const atualizarSitDocService = new AtualizarSitDocService();

    try {
      await atualizarSitDocService.execute(id, situacao);
      return response.status(204).end(); 
    } catch (error) {
      return response.json(error.message);
    }
  }

}

export { AtualizarSitDocController };