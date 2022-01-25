import { Request, Response } from "express";
import { GetDocByIdService } from "../../services/Documentos/GetDocByIdService";

class GetDocByIdController {

  async handle(request: Request, response: Response) {
    
    const { id } = request.params;

    const getDocByIdService = new GetDocByIdService();

    const documento = await getDocByIdService.execute(id);

    return response.status(200).json(documento);
  }

}

export { GetDocByIdController }