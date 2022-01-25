import { Request, Response } from "express";
import { CreateDocService } from "../../services/Documentos/CreateDocService";

class CreateDocController {

  async handle(request: Request, response: Response) {
    
    const documento = request.body;
    
    const createDocService = new CreateDocService();

    try {
      await createDocService.execute(documento);
      return response.status(201).json(documento);
    } catch (error) {
      return response.json(error.message);
    }
  }

}

export { CreateDocController };