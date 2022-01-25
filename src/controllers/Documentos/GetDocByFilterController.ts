import { Request, Response } from "express";
import { GetDocByFilterService } from "../../services/Documentos/GetDocByFilterService";

class GetDocByFilterController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { filter } = request.body;

    const getDocByFilterService = new GetDocByFilterService();

    const documentos = await getDocByFilterService.execute(filter);

    return response.json(documentos);
  }

}

export { GetDocByFilterController };