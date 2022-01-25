import { Request, Response } from "express";
import { GetDocByFilterService } from "../../services/Documentos/GetDocByFilterService";

class GetDocByFilterController {

  async handle(request: Request, response: Response) {

    const { numero, situacao } = request.body;

    const getDocByFilterService = new GetDocByFilterService();

    const documentos = await getDocByFilterService.execute(numero, situacao);

    return response.json(documentos);
  }

}

export { GetDocByFilterController };