import { Request, Response } from "express";
import { CreateProcService } from "../../services/Processos/CreateProcService";

class CreateProcController {

  async handle(request: Request, response: Response) {
    const {numero, nome} = request.body;

    const createProcService = new CreateProcService();

    try {
      const processo = await createProcService.execute(numero, nome);
  
      return response.json(processo);
    } catch (error) {
      return response.status(403).json(error.message);
    }

  }

}

export { CreateProcController };