import { Request, Response } from "express";
import { GetAllProcService } from "../../services/Processos/GetAllProcService";

class GetAllProcController {

  async handle(request: Request, response: Response) {

    const { numero } = request.body;

    const getAllProcService = new GetAllProcService();

    const processos = await getAllProcService.execute(numero);

    return response.json(processos);
  }

}

export { GetAllProcController };