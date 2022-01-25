import { Request, Response } from "express";

import { GetAllDocsService } from '../../services/Documentos/GetAllDocsService';

class GetAllDocsController {

  
  async handle(request: Request, response: Response) {
    
    const getAllDocsService = new GetAllDocsService();

    const documentos = await getAllDocsService.execute();

    return response.json(documentos);
  }
}

export { GetAllDocsController };