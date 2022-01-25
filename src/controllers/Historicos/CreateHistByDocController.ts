import { Request, Response } from "express";
import { CreateHistByDocService } from "../../services/Historicos/CreateHistByDocService";

class CreateHistByDocController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { text } = request.body;

    const createHistByDocService = new CreateHistByDocService();

    const documento = createHistByDocService.execute(id, text);

    return response.status(200).json(documento);
  }

}

export { CreateHistByDocController };